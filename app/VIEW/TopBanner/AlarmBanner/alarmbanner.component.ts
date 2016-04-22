import {Component, EventEmitter} from 'angular2/core'; //Import to be able to use annotations
//Added to allow navigation to Alarmlist Page
import {Router} from 'angular2/router';
//Import Global configs
import {AppConfig} from '../../../CONFIG/Common/appconfig.service'; //Import Global appconfig file
//Import AlarmGroup Component
import {AlarmGroupComponent} from '../../Templates/AlarmGroup/alarmgroup.component';

@Component({
    selector: 'alarmbanner',
    templateUrl:'app/VIEW/TopBanner/AlarmBanner/alarmbanner.template.html',
    styleUrls:[],
    directives:[AlarmGroupComponent],
    outputs:['selectGroup']
})

export class AlarmBannerComponent{
   //Alarm Group names from Config
   alarmGroups = AppConfig.ALARM_GRP;
   //Event fired when group is clicked
   selectGroup = new EventEmitter();
   
   //Inject the Router Class into Constructor
   constructor(private router: Router){
   }
   
   //Eventhandler from Alarmgroup
   onSelectGroup(){
       this.selectGroup.next("almgroup!");
       //Navigate to Alarm Page
       this.router.navigate(['/ALM']);
       
       //TODO: Send selected AlarmGroup ID
   }
    
}