import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NewTweet, Tweet } from 'src/app/interfaces/tweet';
import { TweetsService } from 'src/app/services/tweets/tweets.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.page.html',
  styleUrls: ['./new-tweet.page.scss'],
})
export class NewTweetPage implements OnInit {

  newTweet = {} as NewTweet;

  tweetToEdit: Tweet;

  editMode = false;

  upload: string | ArrayBuffer;

  isStory: boolean;

  constructor(
    private modalCtrl: ModalController,
    private tweetsService: TweetsService,
    private navParams: NavParams,
    private toastService: ToastService,
    private uniLoader: UniLoaderService
  ) { }

  ngOnInit() {
    /*
        Importo il parametro Tweet se acceddo alla modale per MODIFICARE
        Nel caso di accesso alla modal per createReadStream, la mia variabile sarà undefined
    */
    this.tweetToEdit = this.navParams.get('tweet');
    this.editMode = this.tweetToEdit !== undefined;

    this.isStory = this.navParams.get('props') ? true : false;
    this.countCharacter();
  }

  countCharacter() {
    let currentEdit = this.editMode ? this.tweetToEdit : this.newTweet;

    document.getElementById('character-counter').innerHTML = `${currentEdit.tweet.length}/280`;
    let myitem = document.getElementsByClassName("text-item")[0];

    if(currentEdit.tweet.length < 200){
      myitem.classList.remove("mywarning", "myerror");
      myitem.classList.add("ion-valid");
    } else if(currentEdit.tweet.length >= 200 && currentEdit.tweet.length <= 270){
      myitem.classList.remove("ion-valid", "myerror");
      myitem.classList.add("mywarning");
    } else {
      myitem.classList.remove("ion-valid", "mywarning");
      myitem.classList.add("myerror");
    }
  }

  loadImageFromDevice(event) {

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => { 
      this.newTweet.image = reader.result;
    };

    reader.onerror = (error) => {

      //handle errors
      console.log(error);

    };
  };

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async createOrEditTweet() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      if (this.editMode) {

        // Chiamo la editTweet se l'utente sta modificando un tweet esistente
        await this.tweetsService.editTweet(this.tweetToEdit);

      } else {

        this.newTweet.isStory = this.isStory;

        // Chiamo la createTweet se l'utente sta creando un nuovo tweet
        await this.tweetsService.createTweet(this.newTweet);
      }

      // Chiudo il loader
      await this.uniLoader.dismiss();

      // Chiudo la modal
      await this.dismiss();

    } catch (err) {

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: err.message,
        type: ToastTypes.ERROR
      });

    }

  }

  isDataInvalid(): boolean {

    if (this.editMode) {
      return !this.tweetToEdit.tweet.length ||
      this.tweetToEdit.tweet.length > 120;
    } else {
      if (this.newTweet.tweet) {
        return !this.newTweet.tweet.length ||
        this.newTweet.tweet.length > 120;
      }
      return true;
    }

  }

}
