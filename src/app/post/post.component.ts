import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {post} from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: post;
  @Output()
  bubblePost = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:no-shadowed-variable
  getPost(post: post): void{this.bubblePost.emit(post) ;
  }
}
