// export * from './auth.reducer'
// export * from './users.reducer'

// En tu archivo reducers/index.ts

import { authReducer } from './auth.reducer';
import { userReducer } from './users.reducer';
// Importa otros reducers aquí

// Exporta un objeto que contenga todos los reducers
export const reducers = {
  auth: authReducer,
  users: userReducer,
  // Añade otros reducers aquí
};
