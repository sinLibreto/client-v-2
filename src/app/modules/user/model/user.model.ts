// src/app/modules/user/models/user-info.model.ts

export interface ISocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
}

export interface UserModel {
  username: string;
  email: string;
  quote: string;
  work: string;
  school: string;
  location: string;
  bgImageVersion: string;
  profilePicture: string;
  bgImageId: string;
  social: ISocialLinks;
  password?: string; 
}
