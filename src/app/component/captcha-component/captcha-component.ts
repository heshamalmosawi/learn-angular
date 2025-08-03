import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Progress } from '../../services/progress';
import { MathsComponent } from './maths-component/maths-component';
import { Subscription } from 'rxjs';

type CaptchaStep = 'math' | 'image' | 'question';

@Component({
  selector: 'app-captcha-component',
  imports: [MathsComponent],
  templateUrl: './captcha-component.html',
  styleUrl: './captcha-component.scss'
})
export class CaptchaComponent {
  #sequence: CaptchaStep[] = [];
  currentStep: CaptchaStep = 'math';
  private sub: Subscription;

  constructor(private router: Router, private p: Progress) {
    if (this.p.currentStep < 0) {
      this.router.navigate(['']);
    }
    this.#sequence = (['math', 'image', 'question'] as CaptchaStep[]).sort(() => Math.random() - 0.5);
    // this.currentStep = this.#sequence[this.p.currentStep];

    this.sub = this.p.currentStep$.subscribe((step) => {
      if (step >= 0 && step < this.#sequence.length) {
        this.currentStep = this.#sequence[step];
      } else {
        this.router.navigate(['']);
      }
    });
  }

  nextStep(): void {
    let s = this.p.nextStep();
    this.currentStep = this.#sequence[s];
  }

}
