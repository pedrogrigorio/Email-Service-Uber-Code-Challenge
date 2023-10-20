import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSenderContainerComponent } from './email-sender-container.component';

describe('EmailSenderContainerComponent', () => {
  let component: EmailSenderContainerComponent;
  let fixture: ComponentFixture<EmailSenderContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailSenderContainerComponent]
    });
    fixture = TestBed.createComponent(EmailSenderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
