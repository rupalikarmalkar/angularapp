import { Component, Input, OnChanges, OnInit, SimpleChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit,OnChanges {
  @Input() userid:number;
  @Input() parentData:string;
  @Input() product:string;


  constructor() {
    console.log("HooksComponent constructor called");
    
    
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("HooksComponent ngOnChanges called");
    for (const propname in changes) {
      const prop = changes[propname]
      const {previousValue, currentValue, firstChange}=prop;
      console.log(`prop name ${propname}`);
      console.log(`prev value${previousValue}`);

      console.log(`current value ${currentValue}`);

      console.log(`First change ${firstChange}`);
      console.log("___________________");
      

      
      }
    }
  }

  // }

  // ngOnInit() {
  //   console.log("HooksComponent ngOnInit called");

  // }


