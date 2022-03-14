import { PayloadAction } from '@reduxjs/toolkit'

// eslint-disable-next-line import/prefer-default-export
export const justForSideEffect = () => () => {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const justForSideEffectWithPayload = <PT>() => (state: any, action: PayloadAction<PT>) => {}

export const emptyArray = []
