
import { IUser } from "../../auth/interfaces/auth.interface";

export interface IUserResponse {
  users: IUser[];
  page: number;
  total: number;
}

