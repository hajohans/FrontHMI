import {Component, Input, OnInit} from 'angular2/core'; //Import to be able to use annotations
//Import model file for MotorType1
import {MotorType1Model} from './motortype1.model';
import {MotorType1Service} from './motortype1.service';

@Component({
    selector: 'motortype1',
    templateUrl:'app/VIEW/Templates/Motors/MotorType1/motortype1.template.html',
    providers:[MotorType1Service],
})

export class MotorType1Component implements OnInit{
    //Create local instance model from MotorType1Model
   _model : MotorType1Model;
   counter: number = 0;
   @Input() id: number;
  @Input() tagname: string;
  
    //Construct a test version of a motor, to be deleted after subscription is developed.
   constructor(public motorService: MotorType1Service){
       this._model = new MotorType1Model();
    }
    
   //Called when visible on GUI.
   ngOnInit(): void {
       console.log("I'm Initialized!")
       //startSubscription(id, tagname)
       //When initialized in GUI, start subscription from motortype1.service
       //Must grab inputs to be used in startSubscription(id, tagname);
       this.motorService.statusStreamForMotor(this.tagname)
       .subscribe( (currentMotorStatus: MotorType1Model) => {
           //console.log("New motor status: " + JSON.stringify(currentMotorStatus))
           this._model = currentMotorStatus;
           this.counter += 1;
       });
       
/*          this.motorService.newMotorStatus
          .subscribe((currentMotorStatus: MotorType1Model) => {
              switch (currentMotorStatus._tag) {
                  case this._model._tag: {
                      console.log("New motor status: " + JSON.stringify(currentMotorStatus));
                      this._model = currentMotorStatus;
                      break;
                    }
                  default: {console.log("Unknown motor: " + JSON.stringify(currentMotorStatus)); break;}
              }
          }) */
    };
}