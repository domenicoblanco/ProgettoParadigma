import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalContentPage } from './modal-content.page';

describe('ModalContentPage', () => {
  let component: ModalContentPage;
  let fixture: ComponentFixture<ModalContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
