import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Progress {
  private _currentStep = new BehaviorSubject<number>(this.loadStep());
  private _sequence = new BehaviorSubject<string[]>(this.loadSequence());
  sequence$ = this._sequence.asObservable();
  currentStep$ = this._currentStep.asObservable();

  private loadStep(): number {
    const savedStep = sessionStorage.getItem('currentStep');
    return savedStep ? parseInt(savedStep, 10) : -1; // indicating no steps completed
  }
  private loadSequence(): string[] {
    const savedSequence = sessionStorage.getItem('sequence');
    return savedSequence ? JSON.parse(savedSequence) : [];
  }

  private save(step: number, sequence: string[]): void {
    sessionStorage.setItem('currentStep', step.toString());
    sessionStorage.setItem('sequence', JSON.stringify(sequence));
  }

  setSequence(sequence: string[]): void {
    this._sequence.next(sequence);
    this.save(this.currentStep, sequence);
  }

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
      let newCurrentStep = this.currentStep - 1;
      this._currentStep.next(newCurrentStep);
      this.save(newCurrentStep, this._sequence.value);
      console.log(`Current step updated to: ${this.currentStep}`);
    } else {
      console.warn('Already at the first step, cannot go back.');
    }
    return this.currentStep;
  }

  nextStep(): number {
    let newCurrentStep = this.currentStep + 1;
    this._currentStep.next(newCurrentStep);
    this.save(newCurrentStep, this._sequence.value);
    console.log(`Current step updated to: ${this.currentStep}`);
    return this.currentStep;
  }
}
