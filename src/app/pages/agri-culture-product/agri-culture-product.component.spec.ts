import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriCultureProductComponent } from './agri-culture-product.component';

describe('AgriCultureProductComponent', () => {
  let component: AgriCultureProductComponent;
  let fixture: ComponentFixture<AgriCultureProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriCultureProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriCultureProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
