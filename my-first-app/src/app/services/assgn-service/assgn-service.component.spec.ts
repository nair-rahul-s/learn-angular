import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssgnServiceComponent } from './assgn-service.component';

describe('AssgnServiceComponent', () => {
  let component: AssgnServiceComponent;
  let fixture: ComponentFixture<AssgnServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssgnServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssgnServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
