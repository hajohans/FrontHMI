import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../../CONFIG/Common/appconfig.service'; //Import Global appconfig file

@Component({
    selector: 'mudpumps',
    templateUrl:'app/VIEW/MainContent/MudPumps/mudpumps.template.html'
})

export class MudPumpsComponent{
    
    mainHeading = AppConfig.MP_PAGE;
  
    
}