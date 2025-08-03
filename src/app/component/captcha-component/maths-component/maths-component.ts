import { Component } from '@angular/core';
import { Progress } from '../../../services/progress';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maths-component',
  imports: [FormsModule],
  templateUrl: './maths-component.html',
  styleUrl: './maths-component.scss'
})
export class MathsComponent {
  answer: string = '';
  isCorrect: boolean | null = null;
  constructor(private p: Progress) { }

  nextStep(): void {
    console.log(`Answer provided: ${this.answer}`);
    if (this.answer.trim() == '18') {
      this.isCorrect = true;
      this.p.nextStep();
    } else {
      this.isCorrect = false;
    }
  }
}
