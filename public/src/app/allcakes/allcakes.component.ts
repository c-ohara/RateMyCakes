import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-allcakes',
  templateUrl: './allcakes.component.html',
  styleUrls: ['./../app.component.css']
})
export class AllcakesComponent {
  @Input() currentCake: any;

  constructor() { }
}
