
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BizQueryComponent, BizQueryService,BizFormComponent, BizFormService } from 'ngx-widget/biz-app';

const routes: Routes = [{
  path: '',
  children: [
     { path: 'test/dialog/:id', component: BizQueryComponent },        
     { path: ':dir/:pageName/list', component: BizQueryComponent },    
     { path: ':dir/:pageName/list/:pid', component: BizQueryComponent },        
     { path: ':dir/:pageName/create', component: BizFormComponent },     
     { path: ':dir/:pageName/edit/:id', component: BizFormComponent },     
     { path: ':dir/:pageName/view/:id', component: BizFormComponent }, 
    { path: ':dir/:pageName', redirectTo: ':dir/:pageName/list', pathMatch: 'full' },  
    { path: '', redirectTo: 'bizquery/index', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  ],
  entryComponents:[
  ],
  providers: []
})
export class MyBizPageModule {
  
}
