import { Component } from '@angular/core';
import { Progress } from '../../../services/progress';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-img-captcha',
  imports: [FormsModule],
  templateUrl: './img-captcha.html',
  styleUrl: './img-captcha.scss'
})
export class ImgCaptcha {
  answer: string = '';
  expected_answer: number = -1; // Placeholder, expected answer not yets set
  isCorrect: boolean | null = null;
  cat_pic: string = 'cat.jpeg';
  dog_pic: string = 'dog.jpg';
  images: string[] = [];

  constructor(private p: Progress) {
    const tempImages = [
      this.dog_pic,
      this.dog_pic,
      this.dog_pic,
      this.cat_pic
    ];
    this.images = tempImages.sort(() => Math.random() - 0.5);
    this.expected_answer = this.images.indexOf(this.cat_pic);
  }


  nextStep(): void {
    console.log(`Answer provided: ${this.answer}`);
    if (Number(this.answer.trim()) - 1 == this.expected_answer) {
      this.isCorrect = true;
      this.p.nextStep();
    } else {
      this.isCorrect = false;
    }
  }
}
