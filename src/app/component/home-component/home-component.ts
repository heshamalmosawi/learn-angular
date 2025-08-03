import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Progress } from '../../services/progress';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})

export class HomeComponent {
  constructor(private router: Router, private p: Progress) { }

  navigateToCaptcha() {
    this.p.nextStep();
    this.router.navigate(['/captcha']);
  }
}
