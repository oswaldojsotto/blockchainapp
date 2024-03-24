import { configureStore } from '@reduxjs/toolkit'
import ethereumSlice from './ethereum-slice'

export const store = configureStore({
  reducer: {ethereumPrice: ethereumSlice},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch