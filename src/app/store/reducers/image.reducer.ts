import { createReducer, on } from '@ngrx/store';
import { 
  loadUserImages, 
  loadUserImagesSuccess, 
  loadUserImagesFailure, 
  addProfileImage, 
  addBackgroundImage, 
  deleteImage, 
  deleteBackgroundImage,
  addBackgroundImageFailure,
  addBackgroundImageSuccess,


  
  
   
} from '../actions/image.actions';

export interface ImageState {
  images: any[];
  loading: boolean;
  error: any;
}

export const initialState: ImageState = {
  images: [],
  loading: false,
  error: null
};

export const imageReducer = createReducer(
  initialState,
  on(loadUserImages, (state) => ({ ...state, loading: true })),
  on(loadUserImagesSuccess, (state, { images }) => ({ ...state, loading: false, images })),
  on(loadUserImagesFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(addProfileImage, state => ({ ...state, loading: true })),
  on(addBackgroundImage, state => ({ ...state, loading: true })),
  on(deleteImage, state => ({ ...state, loading: true })),
  on(deleteBackgroundImage, state => ({ ...state, loading: true })),

  on(addBackgroundImage, state => ({ ...state, loading: true })),
  on(addBackgroundImageSuccess, (state, { imageUrl }) => ({
    ...state,
    loading: false,
    images: [...state.images, { type: 'background', url: imageUrl }] 
  })),
  on(addBackgroundImageFailure, (state, { error }) => ({ ...state, loading: false, error })),

  
);
