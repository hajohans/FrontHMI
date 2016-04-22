import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../CONFIG/Common/appconfig.service'; //Import Global appconfig file

import {MessageBoardComponent} from '../BottomBanner/MessageBoard/messageboard.component';

@Component({
    selector: 'bottombanner',
    templateUrl:'app/VIEW/BottomBanner/bottombanner.template.html',
    directives:[MessageBoardComponent],
})

export class BottomBannerComponent{
    
    mainHeading = AppConfig.BOTTOM_BANNER;
    
    
}