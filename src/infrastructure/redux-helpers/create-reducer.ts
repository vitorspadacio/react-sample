import { PayloadAction } from '@reduxjs/toolkit'

export type Reducer<ST, PT> = (state: ST, action: PayloadAction<PT>) => ST

export const createReducer =
  <ST, PT = {}>(reducer: Reducer<ST, PT>) =>
  (
    state: ST,

    action: PayloadAction<PT>,
  ): ST =>
    reducer(state, action)
