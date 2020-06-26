import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Tweet } from 'src/app/interfaces/tweet';
import { User } from 'src/app/interfaces/user';
import { TweetsService } from 'src/app/services/tweets/tweets.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; 
import { NewTweetPage } from '../new-tweet/new-tweet.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { ModalContentPage } from '../modal-content/modal-content.component';
import { UsersPage } from 'src/app/pages/users/users.component';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss'],
})
export class TweetsPage implements OnInit, AfterViewChecked {

  tweets: Tweet[] = [];

  constructor(
    private tweetsService: TweetsService,
    private auth: AuthService,
    public uniLoader: UniLoaderService,
    private toastService: ToastService,
    public dialog: MatDialog,
    private user: UsersPage
  ) { }

  ngOnInit() { 
    this.getTweets();
    
    this.user.getUsers();
  }

  ngAfterViewChecked() {
    document.getElementById('toolbar').innerHTML = `<span>Tweets</span>`;
  }

  getUser(id: string) {
    for(let user in this.user.users) {
      if(this.user.users[user]._id == id)
        return this.user.users[user];
    }
    return this.auth.me
  }

  parseDate(s: string) {
    return s.split('T')[0] + ' @ ' + s.split('T')[1].split('.')[0]
  }

  async showModal(component, prop: boolean | Tweet | User, refresh = false) {
    const modal = this.dialog.open(component, {
      data: {
        prop
      } 
    });

    modal.afterClosed().toPromise().then(async () => {

      // Aggiorno la mia lista di tweet, per importare le ultime modifiche apportate dall'utente
      if(refresh){
        await this.getTweets();
        
      }

      // La chiamata è andata a buon fine, dunque rimuovo il loader
      this.uniLoader.dismiss();
    });
  }

  async showStory(tweet: Tweet | User) {
    await this.showModal(ModalContentPage, tweet);
  }

  async createStory() {
    await this.showModal(NewTweetPage, true, true);
  }

  async getTweets() {

    try {
      // Avvio il loader
      await this.uniLoader.show();

      // Popolo il mio array di oggetti 'Tweet' con quanto restituito dalla chiamata API
      this.tweets = await this.tweetsService.getTweets();

      // La chiamata è andata a buon fine, dunque rimuovo il loader
      await this.uniLoader.dismiss();

    } catch (err) {

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: err.message,
        type: ToastTypes.ERROR
      });

    }

  }

  async createOrEditTweet(tweet?: Tweet) {

    /*
        Creo una modal (assegnandola ad una variabile)
        per permettere all'utente di scrivere un nuovo tweet
    */

    const modal = this.dialog.open(NewTweetPage, {
      data: {
        tweet
      } // Passo il parametro tweet. Se non disponibile, rimane undefined.
    });

    /*
        Quando l'utente chiude la modal ( modal.onDidDismiss() ),
        aggiorno il mio array di tweets
    */
    modal.afterClosed().toPromise()
    .then( async () => {

      // Aggiorno la mia lista di tweet, per importare le ultime modifiche apportate dall'utente
      await this.getTweets();
      


      // La chiamata è andata a buon fine, dunque rimuovo il loader
      this.uniLoader.dismiss();

    });
  }

  async deleteTweet(tweet: Tweet) {

    try {

      // Mostro il loader
      await this.uniLoader.show();

      // Cancello il mio tweet
      await this.tweetsService.deleteTweet(tweet._id);

      // Riaggiorno la mia lista di tweets
      await this.getTweets();
      

      // Mostro un toast di conferma
      await this.toastService.show({
        message: 'Your tweet was deleted successfully!',
        type: ToastTypes.SUCCESS
      });

    } catch (err) {

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: err.message,
        type: ToastTypes.ERROR
      });

    }

    // Chiudo il loader
    await this.uniLoader.dismiss();

  }

  canEdit(tweet: Tweet): boolean {

    // Controllo che l'autore del tweet coincida col mio utente
    if (tweet._author) {
      return tweet._author._id === this.auth.me._id;
    }

    return false;

  }

  // Metodo bindato con l'interfaccia in Angular
  getAuthor(tweet: Tweet): string {

    if (this.canEdit(tweet)) {
      return 'You';
    } else {
      return tweet._author.name + ' ' + tweet._author.surname;
    }

  }

}
