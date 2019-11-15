import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-newcake',
  templateUrl: './newcake.component.html',
  styleUrls: ['./../app.component.css']
})
export class NewcakeComponent implements OnInit {
  @Input() allCakes: any;
  newCake: any;
  valmessages: string[];

  constructor(private _httpService: HttpService) { }
  Create() {
    this._httpService.addCake(this.newCake).subscribe(
      data => {
        if (data['status'] == false) {
          this.valmessages = data['errors'];
        }
        else {
          this.valmessages = [];
          this.newCake = { title: "", description: "" }
          this.allCakes.push(data['addedCake']);
        }
      });
  }

  ngOnInit() {
    this.newCake = { title: "", description: "" };
    this.valmessages = [];
  }
}