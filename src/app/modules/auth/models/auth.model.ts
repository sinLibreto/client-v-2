import { IResgisterForm } from "../interfaces/auth.interface";

export class RegisterModel implements IResgisterForm {
  username: string;
  password: string;
  email: string;
  avatarColor?: string;
  avatarImage: string;

  constructor({ username, password, email, avatarColor, avatarImage }: IResgisterForm) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.avatarColor = avatarColor;
    this.avatarImage = avatarImage;
  }

}

export class LoginModel {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

}
