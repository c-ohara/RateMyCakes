import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  allCakes: any;
  currentCake: any;

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getCakesFromHttp();
  }
  getCakesFromHttp() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      this.allCakes = data['allCakes'];
      console.log(this.allCakes);
    })
  }
  Display(id) {
    console.log("Fetching...")
    this.currentCake = undefined;
    let observable = this._httpService.getCake(id);
    observable.subscribe(data => {
      this.currentCake = data['currentCake'];
      console.log(this.currentCake)
    })
  }

  // getCakeFromHttp() {
  //   let observable = this._httpService.getCake("5dcef468be1b874680c56d82");
  //   observable.subscribe(data => {
  //     this.currentCake = data['currentCake'];
  //     console.log(this.currentCake);
  //   })
  // }
}
