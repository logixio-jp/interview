import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BlogService } from 'src/app/services/blog-service';
import { Post } from '../../models/post';
import { DeleteDialog } from '../tools/dialog-delete/dialog-delete-post';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post?: Post;

  constructor(public dialog: MatDialog, private blogService: BlogService) {}

  ngOnInit(): void {}

  openDeletePostDialog(post: Post): void {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px',
      data: post,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        console.log('The dialog was closed' + result);
        this.blogService.deletePost(result);
      }
    });
  }
}
