import { createReducer, on } from '@ngrx/store';
import {

 loadAllPost,
 loadAllPostSuccess,
 loadAllPostFailure
} from '../actions';

export interface PostState {
  post: any[];
  loading: boolean;
  loaded:boolean;
  error: any;
}

export const initialState: PostState = {

  post: [],
  loading: false,
  error: null,
  loaded: false
};

export const PostReducer = createReducer(
  initialState,
  on(loadAllPost, state => ({ ...state, loading: true })),
  on(loadAllPostSuccess,(state,{posts})=>({...state,loading:false,loaded:true,Post:[...posts]})),
  on(loadAllPostFailure,(state,{payload})=>({...state,loading:false,loaded:false,error:payload})),
);
