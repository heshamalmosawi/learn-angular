import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Progress } from '../../services/progress';
import { MathsComponent } from './maths-component/maths-component';
import { Subscription } from 'rxjs';
import { TextCaptcha } from './text-captcha/text-captcha';
import { ImgCaptcha } from './img-captcha/img-captcha';

type CaptchaStep = 'math' | 'text' | 'img';

@Component({
  selector: 'app-captcha-component',
  imports: [MathsComponent, TextCaptcha, ImgCaptcha],
  templateUrl: './captcha-component.html',
  styleUrl: './captcha-component.scss'
})
export class CaptchaComponent implements OnDestroy {
  #sequence: CaptchaStep[] = [];
  currentStep: CaptchaStep = 'math';
  private sub: Subscription;

  constructor(private router: Router, private p: Progress) {
    if (this.p.currentStep < 0) {
      this.router.navigate(['']);
    }
    this.#sequence = (['math', 'text', 'img'] as CaptchaStep[]).sort(() => Math.random() - 0.5);
    this.p.setSequence(this.#sequence);
    this.sub = this.p.currentStep$.subscribe((step) => {
      if (step >= 0 && step < this.#sequence.length) {
        this.currentStep = this.#sequence[step];
      } else if (step >= this.#sequence.length) {
        // Final step completed, navigate to result
        this.router.navigate(['/result']);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  nextStep(): void {
    let s = this.p.nextStep();
    
    // Check if this was the final step
    if (s >= this.#sequence.length) {
      this.router.navigate(['/result']);
    } else {
      this.currentStep = this.#sequence[s];
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
