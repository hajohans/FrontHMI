import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../CONFIG/Common/appconfig.service'; //Import Global appconfig file

@Component({
    selector: 'sidebanner',
    templateUrl:'app/VIEW/SideBanner/sidebanner.template.html'
})

export class SideBannerComponent{
    
    mainHeading = AppConfig.SIDE_BANNER;
  
    
}