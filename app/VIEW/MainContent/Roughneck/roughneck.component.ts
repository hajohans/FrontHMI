import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../../CONFIG/Common/appconfig.service'; //Import Global appconfig file

//Import Motortype component to be able to use it in template
import {MotorType1Component} from '../../Templates/Motors/MotorType1/motortype1.component';

@Component({
    selector: 'roughneck',
    templateUrl:'app/VIEW/MainContent/Roughneck/roughneck.template.html',
    directives:[MotorType1Component]
})

export class RoughneckComponent{
    //Page contains list of active object and creates the subscription?
    //Propertybinding test tag
    instMotor1: string ="Tag sendt fra RN bildet";
    
    mainHeading = AppConfig.RN_PAGE;

}
