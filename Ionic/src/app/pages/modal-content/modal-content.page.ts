import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Tweet } from 'src/app/interfaces/tweet';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {

  isStory: boolean;

  story: Tweet;
  user: User;
  username: string;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.isStory = this.navParams.get('props').isStory !== undefined;
    if(this.isStory) {
      this.story = this.navParams.get('props');
      this.username = `${this.story._author.name} ${this.story._author.surname}`;
    }
    else {
      this.user = this.navParams.get('props');
      this.username = `${this.user.name} ${this.user.surname}`;
    } 
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
