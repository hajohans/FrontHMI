import {Injectable, bind} from 'angular2/core';
//import {Subject, BehaviorSubject, Observable} from 'rxjs';
import Rx from "rxjs/Rx";
import {$WebSocket} from 'angular2-websocket/angular2-websocket';

import {MotorType1Model} from './motortype1.model';

class SerializationHelper {
    static toInstance<T>(obj: T, json: string) : T {
        var jsonObj = JSON.parse(json);

        if (typeof obj["fromJSON"] === "function") {
            obj["fromJSON"](jsonObj);
        }
        else {
            for (var propName in jsonObj) {
                obj[propName] = jsonObj[propName]
            }
        }

        return obj;
    }
}
/**
 * MotorType1Service manages motor WEBsockets
 */
@Injectable()
export class MotorType1Service {
    ws: $WebSocket;
    newMotorStatus: Rx.Subject<MotorType1Model>;
    
    constructor() {
        console.log("Motor service initiated!")
         this.ws = new $WebSocket("ws://localhost:8090", ["valves"]);
         this.ws.connect();
         this.newMotorStatus =  new Rx.Subject<MotorType1Model>();
         
         this.ws.onMessage((message: MessageEvent) => {
            //console.log("Message received: " + message.data);
            var obj = SerializationHelper.toInstance(new MotorType1Model(), message.data);
            this.newMotorStatus.next(obj);
        }, 
            {} )
          this.ws.onError(this.onErrorHandler);
    }
    

    onErrorHandler() {
        console.log("Error received"); 
    }
   statusStreamForMotor(motorTag: string): Rx.Observable<MotorType1Model> {
        return this.newMotorStatus
        .filter((motorStatus: MotorType1Model) => {
           return (motorStatus._tag === motorTag);
        });
    }
}

export var motorType1ServiceInjectables: Array<any> = [
  bind(MotorType1Service).toClass(MotorType1Service)
];
