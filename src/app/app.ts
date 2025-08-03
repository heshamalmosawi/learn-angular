import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Progress } from './services/progress';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angul-it');
  constructor(private router: Router, private progress: Progress) {}

  goHome() {
    this.progress.reset();
    this.router.navigate(['']);
  }
}
