import { WelcomeComponent } from './home/welcome.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    imports:[
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo:'welcome', pathMatch:'full'},
            {path: '**', redirectTo:'welcome', pathMatch:'full'}
          ], { useHash: false})
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}