import { Component, Input, OnChanges, OnInit, SimpleChanges,DoCheck, ContentChild, ElementRef, AfterContentChecked, AfterContentInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  @Input() userid:number;
  @Input() parentData:string;
  @Input() product:string;
  @ContentChild("child",{static: false}) contentChild:ElementRef;
  @ViewChild("childhook",{static: false}) viewChild:ElementRef;




  constructor() {
    console.log("HooksComponent constructor called");
    
    
   }
  ngAfterViewInit(): void {
    console.log("HooksComponent ngAfterViewInit called");
    console.log('view content acess',this.viewChild);
    this.viewChild.nativeElement.setAttribute('style',`color:${this.parentData}`);

  }
  ngOnDestroy(){
    console.log("HooksComponent ngOnDestroy called");

  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    console.log('view content acess',this.viewChild);

    // this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);

    
  }
  ngOnInit(): void {
    console.log("HooksComponent ngOnInit called");
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("HooksComponent ngOnChanges called");
    // for (const propname in changes) {
    //   const prop = changes[propname]
    //   const {previousValue, currentValue, firstChange}=prop;
    //   console.log(`prop name ${propname}`);
    //   console.log(`prev value${previousValue}`);

    //   console.log(`current value ${currentValue}`);

    //   console.log(`First change ${firstChange}`);
    //   console.log("___________________");
    //   }
    }
    ngDoCheck():void{
      console.log("ngDoCheck called" , this.contentChild)
      }
      ngAfterContentInit():void{
        console.log('ngAfterContentInit called', this.contentChild);
        // this.contentChild.nativeElement.setAttribute('style','color:green');
        // this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
      }
     
      
  }

  // }

  //  ngOnInit() {
  //  console.log("HooksComponent ngOnInit called");

  //  }


