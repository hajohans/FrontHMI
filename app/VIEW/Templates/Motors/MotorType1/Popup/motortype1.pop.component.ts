import {Component} from 'angular2/core'; //Import to be able to use annotations
//Import model file for MotorType1
import {MotorType1Model} from './motortype1.model';

@Component({
    selector: 'motortype1',
    templateUrl:'app/VIEW/Templates/Motors/MotorType1/motortype1.template.html',
    inputs:['id', 'tagname']
})

export class MotorType1Component{
    //Create local instance model from MotorType1Model
   _model : MotorType1Model;
    
    //Construct a test version of a motor
   constructor(){
       this._model = new MotorType1Model(10, "testermax") 
    }
    
}