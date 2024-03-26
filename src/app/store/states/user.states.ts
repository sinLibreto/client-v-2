// Asumiendo que tus estados están definidos en un archivo user.states.ts

import { IUser } from "src/app/modules/auth/interfaces/auth.interface";

export interface UserState {
  users: IUser[];
  currentPage: number;
  total: number;
  loading: boolean;
  error: string | null;
  profile: IUser | null;
}

export const initialUserState: UserState = {
  users: [],
  currentPage: 0,
  total: 0,
  loading: false,
  error: null,
  profile: null 
};

export interface UserProfileState {
  profile: IUser | null;
  loading: boolean;
  error: string | null;
}

export const initialUserProfileState: UserProfileState = {
  profile: null,
  loading: false,
  error: null
};
