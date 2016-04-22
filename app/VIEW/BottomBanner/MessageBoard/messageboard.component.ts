import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../../CONFIG/Common/appconfig.service'; //Import Global appconfig file

@Component({
    selector: 'messageboard',
    templateUrl:'app/VIEW/BottomBanner/MessageBoard/messageboard.template.html'
})

export class MessageBoardComponent{
    
    mainHeading = AppConfig.BOTTOM_BANNER;
    
    
}