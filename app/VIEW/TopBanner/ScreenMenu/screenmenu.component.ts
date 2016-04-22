import {Component} from 'angular2/core'; //Import to be able to use annotations
//Added to allow navigation to Alarmlist Page
import {Router} from 'angular2/router';

@Component({
    selector: 'screenmenu',
    templateUrl:'app/VIEW/TopBanner/ScreenMenu/screenmenu.template.html',
    directives:[]
})

export class ScreenMenuComponent{
    //Hardcoded screens, should be placed i configfile 
    //and managed through config page
    screens:string[] = ["MP", "RN", "ALM", "SYS"];
    
    //Inject the Router Class into Constructor
   constructor(private router: Router){
   }
    
   onSelect(){
       //Navigate to Selected Page
       this.router.navigate(['/' + (<HTMLSelectElement>event.srcElement).value]);
       console.log((<HTMLSelectElement>event.srcElement).value);
       
   }
}



