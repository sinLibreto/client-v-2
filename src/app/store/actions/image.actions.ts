import { createAction, props } from "@ngrx/store";

// Cargar imágenes del usuario
export const loadUserImages = createAction(
    '[Images] Load User Images',
    props<{ userId: string }>()
  );
  
  // Éxito al cargar imágenes del usuario
  export const loadUserImagesSuccess = createAction(
    '[Images] Load User Images Success',
    props<{ images: any[] }>()
  );
  
  // Fallo al cargar imágenes del usuario
  export const loadUserImagesFailure = createAction(
    '[Images] Load User Images Failure',
    props<{ error: any }>()
  );

  // Agregar imagen de fondo
  // export const addBackgroundImage = createAction(
  //   '[Images] Add Background Image',
  //   props<{ imageData: FormData }>()
  // );
  
  // Eliminar imagen
  export const deleteImage = createAction(
    '[Images] Delete Image',
    props<{ imageId: string }>()
  );
  
  // Eliminar imagen de fondo
  export const deleteBackgroundImage = createAction(
    '[Images] Delete Background Image',
    props<{ bgImageId: string }>()
  );


export const addProfileImage = createAction(
  '[Images] Add Profile Image',
  props<{ imageBase64: string }>() // Cambiado a esperar una cadena Base64
);

// Acción para el éxito de la subida de la imagen de perfil
export const uploadProfileImageSuccess = createAction(
  '[Images] Upload Profile Image Success',
  props<{ response: any }>() // Ajusta según lo que tu API devuelve
);

// Acción para el fallo de la subida de la imagen de perfil
export const uploadProfileImageFailure = createAction(
  '[Images] Upload Profile Image Failure',
  props<{ error: any }>()
);

// Añadir imagen de portada con éxito
export const addBackgroundImageSuccess = createAction(
  '[Images] Add Background Image Success',
  props<{ imageUrl: string }>()
);

// Fallo al añadir imagen de portada
export const addBackgroundImageFailure = createAction(
  '[Images] Add Background Image Failure',
  props<{ error: any }>()
);

export const addBackgroundImage = createAction(
  '[Images] Add Background Image',
  props<{ imageBase64: string }>() // Enviar cadena Base64
);


