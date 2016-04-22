import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../../CONFIG/Common/appconfig.service'; //Import Global appconfig file


@Component({
    selector: 'systemoverview',
    templateUrl:'app/VIEW/MainContent/SystemOverview/systemoverview.template.html',
    directives: [],
})


export class SystemOverviewComponent{
   
    mainHeading = AppConfig.SYS_PAGE;
    
}