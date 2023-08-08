import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseDetailsInfoComponent } from './components/release-details-info/release-details-info.component';
import { ReleaseDetailComponent } from './screens/release-detail/release-detail.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'details/:id',component: ReleaseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
