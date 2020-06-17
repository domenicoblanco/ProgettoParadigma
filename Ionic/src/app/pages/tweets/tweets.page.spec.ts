import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TweetsPage } from './tweets.page';

describe('TweetsPage', () => {
  let component: TweetsPage;
  let fixture: ComponentFixture<TweetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TweetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
