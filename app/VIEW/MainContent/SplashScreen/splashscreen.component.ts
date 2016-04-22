import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../../CONFIG/Common/appconfig.service'; //Import Global appconfig file

@Component({
    selector: 'splashscreen',
    templateUrl:'app/VIEW/MainContent/SplashScreen/splashscreen.template.html'
})

export class SplashScreenComponent{
    
    mainHeading = AppConfig.SPLASH_PAGE;
  
}