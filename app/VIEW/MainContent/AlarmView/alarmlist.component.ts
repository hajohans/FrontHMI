import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../../CONFIG/Common/appconfig.service'; //Import Global appconfig file


@Component({
    selector: 'alarmlist',
    templateUrl:'app/VIEW/MainContent/AlarmView/alarmlist.template.html',
    directives: [],
})


export class AlarmListComponent{
   
    mainHeading = AppConfig.ALM_PAGE;
    
}
