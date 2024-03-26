import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ImageActions from '../actions/image.actions'; // Asegúrate de que la ruta sea correcta
import { ImageService } from 'src/app/modules/auth/services/images.service';


export interface ImageUploadResponse {
  url: string;
}

@Injectable()
export class ImageEffects {

  uploadProfileImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImageActions.addProfileImage),
      switchMap(action =>
        this.imageService.uploadProfileImage(action.imageBase64).pipe(
          map(response => {
            console.log('Imagen enviada o guardada',response);
            return ImageActions.uploadProfileImageSuccess({ response });
          }),
          catchError(error => {
            console.error('Error al subir la imagen', error); // Mensaje de error
            return of(ImageActions.uploadProfileImageFailure({ error }));
          })
        )
      )
    )
  );

  // ...otros imports

uploadBackgroundImage$ = createEffect(() =>
this.actions$.pipe(
  ofType(ImageActions.addBackgroundImage),
  switchMap(action =>
    this.imageService.uploadBackgroundImage(action.imageBase64).pipe(
      map((response: any) => {
        return ImageActions.addBackgroundImageSuccess({ imageUrl: response.url });
      }),
      catchError(error => of(ImageActions.addBackgroundImageFailure({ error })))
    )
  )
)
);
  constructor(private actions$: Actions, private imageService: ImageService) {}
}
