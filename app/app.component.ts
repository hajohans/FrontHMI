import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';//Import Route

//Import main application components
import {TopBannerComponent} from './VIEW/TopBanner/topbanner.component';
import {BottomBannerComponent} from './VIEW/BottomBanner/bottombanner.component';
import {SideBannerComponent} from './VIEW/SideBanner/sidebanner.component';
import {MainPageComponent} from './VIEW/MainContent/MainPage/mainpage.component';

//****IMPORT ALL MAIN PAGE COMPONENTS****:
import {RoughneckComponent} from './VIEW/MainContent/Roughneck/roughneck.component';
import {MudPumpsComponent} from './VIEW/MainContent/MudPumps/mudpumps.component';
import {SystemOverviewComponent} from './VIEW/MainContent/SystemOverview/systemoverview.component';
import {AlarmListComponent} from './VIEW/MainContent/AlarmView/alarmlist.component';
import {SplashScreenComponent} from './VIEW/MainContent/SplashScreen/splashscreen.component';

//*************************************

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html', //Loads the mainwindow
    directives: [ROUTER_DIRECTIVES, TopBannerComponent, BottomBannerComponent, SideBannerComponent,MainPageComponent],
})
@RouteConfig([
    { path: '/', name:'SPLASH', component: SplashScreenComponent, useAsDefault: true},
    { path: '/RN', name:'RN', component: RoughneckComponent},
    { path: '/MP', name:'MP', component: MudPumpsComponent},
    { path: '/SYS', name:'SYS', component: SystemOverviewComponent},
    { path: '/ALM', name:'ALM', component: AlarmListComponent}
])

export class AppComponent { 
    
    
}
