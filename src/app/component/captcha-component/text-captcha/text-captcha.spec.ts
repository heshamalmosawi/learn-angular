import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCaptcha } from './text-captcha';

describe('TextCaptcha', () => {
  let component: TextCaptcha;
  let fixture: ComponentFixture<TextCaptcha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCaptcha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCaptcha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
