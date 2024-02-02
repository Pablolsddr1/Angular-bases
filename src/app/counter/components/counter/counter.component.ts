import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
    template: `<h1>Hello world 2</h1>
    <hr>
<p>
el numero del contador es : {{counter}}
</p>
<button (click)="MasMenos2(+1)">+1</button>
<button (click)="Reset2()">reset</button>
<button (click)="MasMenos2(-1)">-1</button>
<hr>


    `
})

export class CounterComponent {
    public title: string = 'Hello world';
    public counter:number= 22;
    increaseBy2():void{
      this.counter += 1
    }
    decreaseBy2():void {
      this.counter -= 1;

    }
    MasMenos2(masmenos:number):void{
   this.counter += masmenos;
    }
    Reset2():void{this.counter = 22}

}
