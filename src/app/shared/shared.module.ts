import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { AlainThemeModule } from '@delon/theme';
import { AlainACLModule } from '@delon/acl';
import { ZORROMODULES, ABCMODULES } from '../delon.module';
import { FileUploadModule } from 'ng2-file-upload';
// i18n
import { TranslateModule } from '@ngx-translate/core';

// region: third libs
import { CountdownModule } from 'ngx-countdown';
import { MyAppModule } from 'ngx-widget/my-app/my-app.module';
import { BizAppModule } from 'ngx-widget/biz-app';
import { MyLoadingModule } from 'ngx-widget/yg-loading/myloading.module';
import { MySelectModule } from 'ngx-widget/yg-select/myselect.module';
import { HeaderSearchComponent } from '../vehicle/VehicleCommon/controls/v2/searchInput.component';


const THIRDMODULES = [ 
                        CountdownModule, MyAppModule, BizAppModule, 
                        MySelectModule, MyLoadingModule,FileUploadModule
                     ];
// endregion


// region: your componets & directives
const COMPONENTS = [HeaderSearchComponent];
const DIRECTIVES = [];
// endregion

@NgModule({  
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule.forChild(),
        ...ABCMODULES,
        AlainACLModule,
        // third libs
        ...THIRDMODULES        
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule,
        ...ABCMODULES,
        // i18n
        TranslateModule,
        // third libs           
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ]
})
export class SharedModule { }
