import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { Activity1Component } from './activity1/activity1.component';
import { Activity2Component } from './activity2/activity2.component';
import { Question2Component } from './question2/question2.component';
import { ExplanationComponent } from './explanation/explanation.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'activity1', component: Activity1Component },
    { path: 'activity2', component: Activity2Component },
    { path: 'explanation', component: ExplanationComponent },
    { path: 'question2', component: Question2Component }
];
