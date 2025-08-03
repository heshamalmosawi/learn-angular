import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { CaptchaComponent } from './component/captcha-component/captcha-component';
import { ResultComponent } from './component/result-component/result-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'captcha', component: CaptchaComponent },
    { path: 'result', component: ResultComponent },
    { path: '**', redirectTo: '' }
];
