import { Routes } from '@angular/router';
import {HomeComponent} from './components/home';
import {ActionsheetsComponent} from './components/actionsheets';
import {AlertsComponent} from './components/alerts';
import {BadgesComponent} from './components/badges';
import {MobileComponent} from './components/mobile';

export const routes: Routes = [
{path:'home', component: HomeComponent }, 
{path: 'actionsheets', component: ActionsheetsComponent},
{path: 'alerts', component: AlertsComponent},
{path: 'badges', component: BadgesComponent},
{path: 'mobile', component: MobileComponent},
];