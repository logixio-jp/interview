import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service';
import { Post } from '../../models/post';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  // @ts-ignore
  public post: Post;

  public currentComment: string = '';

  constructor(
    private _blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => of(params.get('id'))))
      .subscribe((id) => {
        this._blogService.getPostById(Number(id)).subscribe((post) => {
          this.post = post;
        });
      });
  }

  addComment(): void {
    if (this.currentComment != '') {
      if (this.post.comments == null) {
        this.post.comments = [];
      }

      this.post.comments.push({
        content: this.currentComment,
      });

      this.currentComment = '';
    }
  }
}
