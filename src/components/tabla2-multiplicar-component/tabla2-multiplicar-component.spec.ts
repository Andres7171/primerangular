import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tabla2MultiplicarComponent } from './tabla2-multiplicar-component';

describe('Tabla2MultiplicarComponent', () => {
  let component: Tabla2MultiplicarComponent;
  let fixture: ComponentFixture<Tabla2MultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tabla2MultiplicarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Tabla2MultiplicarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
