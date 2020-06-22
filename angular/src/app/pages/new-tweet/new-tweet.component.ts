import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewTweet, Tweet } from 'src/app/interfaces/tweet';
import { TweetsService } from 'src/app/services/tweets/tweets.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';
import { TweetsPage } from '../tweets/tweets.component';
import { UsersPage } from '../users/users.component';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.scss'],
})
export class NewTweetPage implements OnInit {

  newTweet = {} as NewTweet;

  tweetToEdit: Tweet;

  editMode = false;

  upload: string | ArrayBuffer;

  isStory: boolean;

  constructor(
    private tweetsService: TweetsService,
    private toastService: ToastService,
    public uniLoader: UniLoaderService,
    @Inject(MAT_DIALOG_DATA) public tweet,
    public dialogRef: MatDialogRef<TweetsPage>
  ) { }

  ngOnInit() {
    this.tweetToEdit = this.tweet.tweet;
    this.editMode = this.tweetToEdit !== undefined;
    
    if(this.editMode)
      this.isStory = this.tweet.isStory;
    else
      this.newTweet.image = "";
    if(typeof(this.tweet.prop) == "boolean")
      this.isStory = this.tweet.prop
  }

  countCharacter() {
    document.getElementById('character-counter').innerHTML = `${this.newTweet.tweet.length}/280`;
    let myitem = document.getElementsByClassName("text-item")[0];
    if(this.newTweet.tweet.length < 200){
      myitem.classList.remove("mywarning", "myerror");
      myitem.classList.add("ion-valid");
    } else if(this.newTweet.tweet.length >= 200 && this.newTweet.tweet.length <= 270){
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

  dismiss() {
    this.dialogRef.close();
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
      this.tweetToEdit.tweet.length > 280;
    } else {
      if (this.newTweet.tweet) {
        return !this.newTweet.tweet.length ||
        this.newTweet.tweet.length > 280;
      }
      return true;
    }

  }

}
