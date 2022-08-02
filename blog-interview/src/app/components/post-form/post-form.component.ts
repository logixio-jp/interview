import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Post } from 'src/app/models/post';

import { ErrorStateMatcher } from '@angular/material/core';
import { BlogService } from 'src/app/services/blog-service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit, AfterViewInit {
  @ViewChild('titleinput') input?: ElementRef;

  postFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  matcher = new MyErrorStateMatcher();

  post: Post = {
    title: '',
    content: '',
  };

  constructor(
    private router: Router,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    debugger;
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => of(params.get('id'))))
      .subscribe((id) => {
        if (id) {
          this.blogService.getPostById(Number(id)).subscribe((post) => {
            this.post = post;
          });
        }
      });
  }

  addOrEditPost() {
    if (this.post.id == null) {
      this.blogService.createPost(this.post);
    } else {
      this.blogService.editPost(this.post);
    }

    this.router.navigate(['/posts']);
  }

  cancel() {
    this.router.navigate(['/posts']);
  }

  ngAfterViewInit(): void {
    if (this.input != null)
      this.renderer.selectRootElement(this.input['nativeElement']).focus();

    this.cd.detectChanges();
  }
}
