import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../../../CONFIG/Common/appconfig.service'; //Import Global appconfig file

@Component({
    selector: 'alarmgroup',
    templateUrl:'app/VIEW/Template/AlarmGroup/alarmgroup.template.html',
    styleUrls:[],
})

export class AlarmGroupComponent{
    
    mainHeading = AppConfig.TOP_BANNER;
    
}