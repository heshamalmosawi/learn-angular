import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Progress } from '../../services/progress';

@Component({
  selector: 'app-result-component',
  imports: [],
  templateUrl: './result-component.html',
  styleUrl: './result-component.scss'
})
export class ResultComponent {
  constructor(private router: Router, private progress: Progress) {}

  goHome() {
    this.progress.reset();
    this.router.navigate(['']);
  }
}
