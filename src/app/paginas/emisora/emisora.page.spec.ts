import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmisoraPage } from './emisora.page';

describe('EmisoraPage', () => {
  let component: EmisoraPage;
  let fixture: ComponentFixture<EmisoraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisoraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmisoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
