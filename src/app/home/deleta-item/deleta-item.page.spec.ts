import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletaItemPage } from './deleta-item.page';

describe('DeletaItemPage', () => {
  let component: DeletaItemPage;
  let fixture: ComponentFixture<DeletaItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletaItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletaItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
