import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Progress {
  private _currentStep = new BehaviorSubject<number>(-1); // indicating no steps completed
  currentStep$ = this._currentStep.asObservable();

  get currentStep(): number {
    return this._currentStep.value;
  }

  reset(): void {
    this._currentStep.next(-1);
  }

  isFirstStep(): boolean {
    return this.currentStep === 0;
  }

  prevStep(): number {
    if (this.currentStep > 0) {
      this._currentStep.next(this.currentStep - 1);
      console.log(`Current step updated to: ${this.currentStep}`);
    } else {
      console.warn('Already at the first step, cannot go back.');
    }
    return this.currentStep;
  }

  nextStep(): number {
    this._currentStep.next(this.currentStep + 1);
    console.log(`Current step updated to: ${this.currentStep}`);
    return this.currentStep;
  }
}
