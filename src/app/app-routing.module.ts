import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {StudentComponent} from "./student/student.component";
import {StudentListComponent} from "./student-list/student-list.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'students', component: StudentListComponent },
    { path: 'students/:studentId', component: StudentComponent },
    { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
