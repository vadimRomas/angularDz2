import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {post} from '../models/post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: post[];

  choseOne: post;

  constructor(private postService: PostService ) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value);

  }
  // tslint:disable-next-line:no-shadowed-variable
  getBubblePost(post: post): void{
    console.log(post);
    this.choseOne = post;
  }
}
