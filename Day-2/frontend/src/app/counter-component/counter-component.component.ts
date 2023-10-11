import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent {
   count=0;
   increment(){
    this.count++
   }
   decrement(){
    if(this.count>0){
      this.count--;
    }
   }
   reset(){
    this.count=0
   }
}
