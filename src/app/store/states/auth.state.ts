import { IUser } from "src/app/modules/auth/interfaces/auth.interface";

export interface AuthState {
  user: IUser | null;
  token: string | null;

  loading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};
