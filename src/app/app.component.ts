import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hello world';
  public counter:number= 22;
  increaseBy():void{
    this.counter += 1
  }
  decreaseBy():void {
    this.counter -= 1;

  }
  MasMenos(masmenos:number):void{
 this.counter += masmenos;
  }
  Reset():void{this.counter = 22}
}


