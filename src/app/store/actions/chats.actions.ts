// Archivo: src/app/actions/post.actions.ts
import { createAction, props } from '@ngrx/store';

// Crear un nuevo post
export const createPost = createAction(
  '[Post] Create Post',
  props<{ post: any }>() // Reemplaza any por tu tipo de datos específico para un post
);

// Leer o cargar posts
export const loadPosts = createAction('[Post] Load Posts');

// Actualización de un post especificado anteriormente
export const updatePostItem = createAction(
  '[Post] Update Post Item',
  props<{
    image?: string,
    video?: string,
    gifUrl?: string,
    imgId?: string,
    imgVersion?: string,
    videoId?: string,
    videoVersion?: string,
    post: any  // Asegúrate de ajustar este tipo según tu modelo de datos
  }>()
);

// Eliminar un post
export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ postId: string }>() // Asume que cada post tiene un identificador único de tipo string
);

// Acción para limpiar o resetear el estado de los posts
export const clearPosts = createAction('[Post] Clear Posts');
