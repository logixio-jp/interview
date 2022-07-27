import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private _blogService: BlogService) {}

  ngOnInit(): void {
    this._blogService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
