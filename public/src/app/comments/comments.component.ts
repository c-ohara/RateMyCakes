import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./../app.component.css','./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() cakeToRate: any;
  newComment: any;
  valmessages: string[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newComment = {Content: "", Rating: 0}
    this.valmessages = [];
  }
  Create() {
    this._httpService.addComment(this.newComment, this.cakeToRate['_id']).subscribe(
      data => {
        if (data['status'] == false) {
          this.valmessages = data['errors'];
          console.log(data);
        }
        else {
          this.valmessages = [];
          this.newComment = { Content: "", Rating: 0 }
          console.log(this.newComment);
        }
      });
  }
}
