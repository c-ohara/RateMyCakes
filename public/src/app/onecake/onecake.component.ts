import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-onecake',
  templateUrl: './onecake.component.html',
  styleUrls: ['./../app.component.css']
})
export class OnecakeComponent implements OnInit {
  @Input() currentCake: any;
  average: String;

  constructor() { }

  ngOnInit() {
    let sum = 0;
    for (let comment of this.currentCake.Comments) {
      sum += comment.Rating;
    }
    if(this.currentCake.Comments.length > 0) {
      this.average = (sum/this.currentCake.Comments.length).toFixed(2);
    }
    else {
      this.average = "0";
    }
  }

}
