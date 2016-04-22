
interface IHeader{
    tag:string;
    type: number; 
    title:string; 
    desc:string;
    engUnit: string;
    altUnit: string;
}

interface ICommand {
       //Command data area
         start: boolean;
         stop: boolean;
         reset: boolean
}

interface IStatus {
       //Status data area
       run: boolean;
       rdy: boolean;
       fip:boolean;
       avl: boolean;
       alm: boolean;
       trp: boolean;
       inh: boolean;
       cerr: boolean;
       emg: boolean;
       
       //status values:
       curr: number;
       runh: number 
}


export class MotorType1Model {
    //This class represents the dataexchange with the PLC
    _id: number;
    _tag: string;
    _start: boolean;
    _run: boolean;
  
  constructor(id : number, tag: string) 
  {
     this._id = id;
     this._tag = tag;
     this._start = false;
     this._run = false;
     }
}