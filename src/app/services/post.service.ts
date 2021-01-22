import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {post} from '../models/post';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService{

  constructor(private httpClient: HttpClient) {
  }
  getAllPosts(): Observable<post[]>{
    return this.httpClient.get<post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
