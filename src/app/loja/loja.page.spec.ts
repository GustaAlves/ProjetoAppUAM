import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LojaPage } from './loja.page';

describe('LojaPage', () => {
  let component: LojaPage;
  let fixture: ComponentFixture<LojaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
