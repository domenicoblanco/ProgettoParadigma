import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tweet } from 'src/app/interfaces/tweet';
import { User } from 'src/app/interfaces/user';
import { TweetsPage } from 'src/app/pages/tweets/tweets.component';
import { UsersPage } from 'src/app/pages/users/users.component';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentPage implements OnInit {

  isStory: boolean;

  story: Tweet;
  user: User;
  username: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Tweet | User,
    @Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<TweetsPage> | MatDialogRef<UsersPage>
  ) { 
    this.isStory = false;
  }

  ngOnInit() {
    if(this.data.constructor.name == 'Tweet') {
      this.story = this.data as Tweet;
      this.isStory = this.story.isStory;
      this.username = `${this.story._author.name} ${this.story._author.surname}`;
    }
    else {
      this.user = this.data as User;
      this.username = `${this.user.name} ${this.user.surname}`;
    }
  }

  dismiss() {
    this.dialogRef.close();
  }

}
