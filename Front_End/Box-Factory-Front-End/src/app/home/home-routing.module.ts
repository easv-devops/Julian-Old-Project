import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {CreateBoxComponent} from "../create-box/create-box.component";
import {EditBoxComponent} from "../edit-box/edit-box.component";

const routes: Routes = [
  {
    path: '',
    component: HomePage,},
  {
    path:'create-box',
    component: CreateBoxComponent},
  {
    path: 'edit-box',
    component: EditBoxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
