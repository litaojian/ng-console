import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { SearchComponent } from './search.component';


const routes: Routes = [
    { path: 'search', component: SearchComponent,data: { title: '轨迹查询' } }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
    declarations: [
        SearchComponent
    ],
    exports: [
        RouterModule
    ]
})
export class VehicleSearchModule { }
