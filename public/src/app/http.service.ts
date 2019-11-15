import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getCakes();
  }

  getCakes() {
    return this._http.get("/cakes");
  }
  addCake(newCake) {
    return this._http.post("/cakes", newCake);
  }
  getCake(id) {
    return this._http.get("/cakes/" + id);
  }
  addComment(newComment, cakeId) {
    return this._http.post("/comments/"+cakeId, newComment);
  }
}
