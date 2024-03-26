// actions/post.actions.ts
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { PostModel } from 'src/app/modules/post/models/post.model';

export const loadPosts = createAction(
  '[Post] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: PostModel[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

export const addPost = createAction(
  '[Post] Add Post',
  props<{ post: PostModel }>()
);

export const addPostSuccess = createAction(
  '[Post] Add Post Success',
  props<{ post: PostModel }>()
);

export const addPostFailure = createAction(
  '[Post] Add Post Failure',
  props<{ error: any }>()
);

export const updatePost = createAction(
  '[Post] Update Post',
  props<{ update: Update<PostModel> }>()
);

export const updatePostSuccess = createAction(
  '[Post] Update Post Success',
  props<{ update: Update<PostModel> }>()
);

export const updatePostFailure = createAction(
  '[Post] Update Post Failure',
  props<{ error: any }>()
);

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ id: string }>()
);

export const deletePostSuccess = createAction(
  '[Post] Delete Post Success',
  props<{ id: string }>()
);

export const deletePostFailure = createAction(
  '[Post] Delete Post Failure',
  props<{ error: any }>()
);
