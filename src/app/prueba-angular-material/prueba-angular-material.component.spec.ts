import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAngularMaterialComponent } from './prueba-angular-material.component';

describe('PruebaAngularMaterialComponent', () => {
  let component: PruebaAngularMaterialComponent;
  let fixture: ComponentFixture<PruebaAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaAngularMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
