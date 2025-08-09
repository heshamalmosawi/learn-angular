import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCaptcha } from './img-captcha';

describe('ImgCaptcha', () => {
  let component: ImgCaptcha;
  let fixture: ComponentFixture<ImgCaptcha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgCaptcha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCaptcha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
