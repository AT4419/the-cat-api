import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatsComponent } from './all-cats.component';

describe('AllCatsComponent', () => {
  let component: AllCatsComponent;
  let fixture: ComponentFixture<AllCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
