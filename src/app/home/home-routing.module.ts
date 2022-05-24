import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GuardHomeGuard } from '../guards/guard-home.guard';

const routes: Routes = [{ path: '', component: HomeComponent, canActivate:[GuardHomeGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
