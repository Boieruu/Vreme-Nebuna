// uyw.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UywComponent } from './uyw.component';
import { Meta, Title } from '@angular/platform-browser';
import { CommentsService } from '../services/comments.service';
import { UserService } from '../services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: 'uyw', component: UywComponent }];

@NgModule({
  declarations: [UywComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToastrModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService, CommentsService, Meta, Title],
})
export class UywModule {}
