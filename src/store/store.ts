import { configureStore } from '@reduxjs/toolkit'
import { createAPI } from '../services/api'
import { authSlice } from './slices/auth'
import { offersSlice } from './slices/offers'
import { offerSlice } from './slices/offer'
import { reviewsSlice } from './slices/reviews'

const api = createAPI()

const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
		[offersSlice.name]: offersSlice.reducer,
		[offerSlice.name]: offerSlice.reducer,
		[reviewsSlice.name]: reviewsSlice.reducer
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
