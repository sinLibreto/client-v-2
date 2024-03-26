import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor(
    private store: Store<any>,
    private http: HttpClient
    
    ) {} // Asegúrate de tipar el Store correctamente según tu estado

  validateFile(file: File, type: string): boolean {
    if (type === 'image') {
      const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      return file && validImageTypes.includes(file.type);
    } else {
      const validVideoTypes = ['video/m4v', 'video/avi', 'video/mpg', 'video/mp4', 'video/webm'];
      return file && validVideoTypes.includes(file.type);
    }
  }

  checkFileSize(file: File, type: string): string {
    let fileError = '';
    const isValid = this.validateFile(file, type);
    if (!isValid) {
      fileError = `File ${file.name} not accepted.`;
    }
    if (file.size > 50000000) { // 50 MB
      fileError = 'File is too large.';
    }
    return fileError;
  }

  checkFile(file: File, type: string) {
    if (!this.validateFile(file, type)) {
      window.alert(`File ${file.name} not accepted.`);
      return;
    }
    const fileSizeError = this.checkFileSize(file, type);
    if (fileSizeError) {
      window.alert(fileSizeError);
    }
  }


  readAsBase64(file: File): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  getBackgroundImageColor(imageUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = 'Anonymous';
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
        const bgColor = this.convertRGBToHex(imageData[0], imageData[1], imageData[2]);
        resolve(bgColor);
      };
      image.onerror = (error) => reject(error);
      image.src = imageUrl;
    });
  }

  private convertRGBToHex(red: number, green: number, blue: number): string {
    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  }


  uploadProfileImage(imageBase64: string) {
    const url = `http://localhost:5000/api/v1/images/profile`; 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    const body = { image: imageBase64 };

    return this.http.post(url, body, { headers, withCredentials: true });
  }

  uploadBackgroundImage(imageBase64: string) {
    const url = `http://localhost:5000/api/v1/images/background`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    const body = { image: imageBase64 };

    return this.http.post(url, body, { headers, withCredentials: true });
  }
}
