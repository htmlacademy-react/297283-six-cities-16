import { configureStore } from '@reduxjs/toolkit'
import { offersSlice } from './slices/offers'
import { authSlice } from './slices/auth'
import { createAPI } from '../services/api'

const api = createAPI()

const store = configureStore({
	reducer: {
		[offersSlice.name]: offersSlice.reducer,
		[authSlice.name]: authSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api
			}
		})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
