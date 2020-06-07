import { Action, createReducer, on, props } from '@ngrx/store';
import { reset } from './contador.actions';
import {
  incrementar,
  decrementar,
  multiplicar,
  dividir,
} from './contador.actions';

export const initialState = 10;

const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  // on(multiplicar, (state, props) => state * props.numero), o usando desestructuración:
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, (state) => initialState)
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
