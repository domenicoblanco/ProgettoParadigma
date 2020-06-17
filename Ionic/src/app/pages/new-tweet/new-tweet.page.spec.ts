import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTweetPage } from './new-tweet.page';

describe('NewTweetPage', () => {
  let component: NewTweetPage;
  let fixture: ComponentFixture<NewTweetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTweetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTweetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
