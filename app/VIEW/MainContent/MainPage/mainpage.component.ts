import {Component} from 'angular2/core'; //Import to be able to use annotations
import {AppConfig} from '../../../CONFIG/Common/appconfig.service'; //Import Global appconfig file


@Component({
    selector: 'mainpage',
    templateUrl:'app/VIEW/MainContent/MainPage/mainpage.template.html',
    directives: [],
})


export class MainPageComponent{
   
    mainHeading = AppConfig.MAIN_PAGE;
    
}