import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroName:string[] = ['spiderman','ironman','hulk','martillo loco', 'Raccoon loco']
public deletedHero?:string;


removeLastHero():void {
   this.deletedHero = this.heroName.pop();
}
}
