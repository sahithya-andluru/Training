import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsComponent} from './points/points.component';
import { JoinHomeComponent } from './join-home/join-home.component';
import { PointingComponent } from './pointing/pointing.component';
import { ImageComponent } from './image/image.component';




const routes: Routes = [
   {path :'points',component: PointsComponent},
   {path :'join',component: JoinHomeComponent},
   {path :'pointing',component: PointingComponent},
   {path :'',component: ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
