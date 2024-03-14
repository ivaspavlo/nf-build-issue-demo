import { createReducer, on } from '@ngrx/store';
import { LoginAction, LogoutAction } from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false
}

export const authReducer = createReducer(
  initialAuthState,
  on(LoginAction, (state) => {
    return { ...state, isLoggedIn: true };
  }),
  on(LogoutAction, (state) => {
    return { ...state, isLoggedIn: false };
  })
);
