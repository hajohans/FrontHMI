import {Component} from 'angular2/core'; //Import to be able to use annotations

//Import Individual Components
import {ScreenMenuComponent} from '../TopBanner/ScreenMenu/screenmenu.component';
import {AlarmBannerComponent} from '../TopBanner/AlarmBanner/alarmbanner.component';
import {AppConfig} from '../../CONFIG/Common/appconfig.service'; //Import Global appconfig file

@Component({
    selector: 'topbanner',
    templateUrl:'app/VIEW/TopBanner/topbanner.template.html',
    styleUrls:[],
    directives:[ScreenMenuComponent, AlarmBannerComponent],
})

export class TopBannerComponent{
    
    mainHeading = AppConfig.TOP_BANNER;
    
}