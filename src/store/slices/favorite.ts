import { createSlice } from '@reduxjs/toolkit'
import { RequestStatus } from '../../const'
import { fetchFavorite, toggleFavorite } from '../thunks/favorite'
import { Offer } from '../../types/offer'

interface favoriteState {
	favorite: Offer[]
	status: RequestStatus
}

const initialState: favoriteState = {
	favorite: [],
	status: RequestStatus.Initial
}

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {},
	selectors: {
		favorite: (state) => state.favorite,
		status: (state) => state.status
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFavorite.pending, (state) => {
				state.status = RequestStatus.Loading
			})
			.addCase(fetchFavorite.fulfilled, (state, action) => {
				state.status = RequestStatus.Success
				state.favorite = action.payload
			})
			.addCase(fetchFavorite.rejected, (state) => {
				state.status = RequestStatus.Failed
			})
		builder
			.addCase(toggleFavorite.pending, (state) => {
				state.status = RequestStatus.Loading
			})
			.addCase(toggleFavorite.fulfilled, (state, action) => {
				if (action.payload.isFavorite) {
					state.favorite.push(action.payload)
				} else {
					state.favorite = state.favorite.filter((item) => item.id !== action.payload.id)
				}
			})
			.addCase(toggleFavorite.rejected, (state) => {
				state.status = RequestStatus.Failed
			})
	}
})
