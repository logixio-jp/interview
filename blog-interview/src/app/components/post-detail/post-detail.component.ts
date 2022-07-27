import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  // @ts-ignore
  public post: Post;

  constructor(private _blogService: BlogService) {}

  ngOnInit(): void {
    this._blogService.getPostById(0).subscribe((post) => {
      this.post = post;
    });
  }
}
