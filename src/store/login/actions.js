import { createAction, createAsyncAction } from 'store/create-action';
export const login = createAsyncAction('LOGIN');
export const logout = createAction('LOGOUT')