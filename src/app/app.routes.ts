import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ApiDataComponent } from './component/api-data/api-data.component';
import { FeedbackFormComponent } from './component/feedback-form/feedback-form.component';

export const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'popular', component: ApiDataComponent },
  { path: 'now-playing', component: ApiDataComponent },
  { path: 'upcoming', component: ApiDataComponent },
  { path: 'top-rated', component: ApiDataComponent },
  { path: 'feedback', component: FeedbackFormComponent },
];
