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

  nextStep(): number {
    this._currentStep.next(this.currentStep + 1);
    console.log(`Current step updated to: ${this.currentStep}`);
    return this.currentStep;
  }
}
