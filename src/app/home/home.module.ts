import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';


//pipes
import { DefaulNumberNullPipe } from './shared/pipes/defaul-number-null.pipe';

import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearcherComponent } from './shared/components/searcher/searcher.component';
import { TeamComponent } from './shared/components/team/team.component';



@NgModule({
  declarations: [HomeComponent, SearcherComponent, TeamComponent, DefaulNumberNullPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
