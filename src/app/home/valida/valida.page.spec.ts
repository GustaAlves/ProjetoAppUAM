import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidaPage } from './valida.page';

describe('ValidaPage', () => {
  let component: ValidaPage;
  let fixture: ComponentFixture<ValidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
