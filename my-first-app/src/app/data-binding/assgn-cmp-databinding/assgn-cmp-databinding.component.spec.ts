import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssgnCmpDatabindingComponent } from './assgn-cmp-databinding.component';

describe('AssgnCmpDatabindingComponent', () => {
  let component: AssgnCmpDatabindingComponent;
  let fixture: ComponentFixture<AssgnCmpDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssgnCmpDatabindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssgnCmpDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
