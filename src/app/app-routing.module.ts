import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationEnd } from '@angular/router';
import { LoggedViewComponent } from './components/logged-view/logged-view.component';

const routes: Routes = [
  {path: 'LoggedView', component: LoggedViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
