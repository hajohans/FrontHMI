import {Component, Input, OnInit} from 'angular2/core'; //Import to be able to use annotations
//Import model file for MotorType1
import {MotorType1Model} from './motortype1.model';

@Component({
    selector: 'motortype1',
    templateUrl:'app/VIEW/Templates/Motors/MotorType1/motortype1.template.html',
    inputs:['id', 'tagname']
})

export class MotorType1Component implements OnInit{
    //Create local instance model from MotorType1Model
   _model : MotorType1Model;
  
    //Construct a test version of a motor, to be deleted after subscription is developed.
   constructor(){
       this._model = new MotorType1Model(10, "Motor1Tag") 
    }
    
   //Called when visible on GUI.
   ngOnInit(): void {
       console.log("I'm Initialized!")
       //startSubscription(id, tagname)
       //When initialized in GUI, start subscription from motortype1.service
       //Must grab inputs to be used in startSubscription(id, tagname);
    };
}