import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormComponent } from './post-form.component';
import { BlogService } from '../../services/blog-service';
import { of } from 'rxjs';
import { Post } from '../../models/post';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;
  let blogService: BlogService;
  let createPostSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFormComponent],
      providers: [BlogService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    blogService = TestBed.inject(BlogService);
    createPostSpy = spyOn(blogService, 'createPost').and.returnValue(of(true));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createPost service method when form is submitted', () => {
    const mockPost = {
      title: 'test title',
      content: 'some fantastic content',
    } as Post;

    fixture.nativeElement.querySelector('#title').value = mockPost.title;
    fixture.nativeElement
      .querySelector('#title')
      .dispatchEvent(new Event('input'));

    fixture.nativeElement.querySelector('#content').value = mockPost.content;
    fixture.nativeElement
      .querySelector('#content')
      .dispatchEvent(new Event('input'));
    fixture.detectChanges();

    fixture.nativeElement.querySelector('#submitButton').click();
    fixture.detectChanges();

    expect(createPostSpy).toHaveBeenCalledWith({
      ...mockPost,
      content: 'some terrible content',
    });
  });
});
