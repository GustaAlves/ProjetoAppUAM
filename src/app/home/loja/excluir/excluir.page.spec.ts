import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExcluirPage } from './excluir.page';

describe('ExcluirPage', () => {
  let component: ExcluirPage;
  let fixture: ComponentFixture<ExcluirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExcluirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
