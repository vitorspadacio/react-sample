import { PayloadAction } from '@reduxjs/toolkit'

// eslint-disable-next-line import/prefer-default-export
export const justForSideEffect = () => () => {}

export const justForSideEffectWithPayload =
  <PT>() =>
  (state: any, action: PayloadAction<PT>) => {}
