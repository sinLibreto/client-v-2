export interface PostModel {
  id: string;
  post?: string;
  bgColor?: string;
  privacy?: string;
  feelings?: string;
  gifUrl?: string;
  profilePicture?: string;
  imgVersion?: string;
  imgId?: string;
  image?: string;
  video?: string;
  videoVersion?: string;
  videoId?: string;
}

// post.state.ts
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface PostState extends EntityState<PostModel> {
  // additional entities state properties
  selectedPostId: string | null;
  loading: boolean;
  error: string | null;
}

export function selectPostId(a: PostModel): string {
  //In this case, the post's id is its unique identifier
  return a.id;
}

export const adapter: EntityAdapter<PostModel> = createEntityAdapter<PostModel>({
  selectId: selectPostId,
});

export const initialState: PostState = adapter.getInitialState({
  // additional entity state properties
  selectedPostId: null,
  loading: false,
  error: null,
});
