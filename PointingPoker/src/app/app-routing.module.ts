import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsComponent} from './points/points.component';
import { JoinHomeComponent } from './join-home/join-home.component';
import { PointingComponent } from './pointing/pointing.component';




const routes: Routes = [
   {path :'points',component: PointsComponent},
   {path :'join',component: JoinHomeComponent},
   {path :'points/:id',component: PointingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
