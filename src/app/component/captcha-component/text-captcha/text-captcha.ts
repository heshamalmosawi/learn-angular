import { Component } from '@angular/core';
import { Progress } from '../../../services/progress';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-captcha',
  imports: [FormsModule],
  templateUrl: './text-captcha.html',
  styleUrl: './text-captcha.scss'
})
export class TextCaptcha {
  question: string = 'Type the text without the vowels: Tr0ub4dor#`';
  expected_answer: string = 'Tr0b4dr#`';
  answer: string = '';

  isCorrect: boolean | null = null;

  constructor(private p: Progress) { }
  
  isFirstStep(): boolean {
    return this.p.isFirstStep();
  }

  prevStep(): void {
    this.p.prevStep();
  }

  nextStep(): void {
    console.log(`Answer provided: ${this.answer}`);
    if (this.answer == this.expected_answer) {
      this.isCorrect = true;
      this.p.nextStep();
    } else {
      this.isCorrect = false;
    }
  }
}
