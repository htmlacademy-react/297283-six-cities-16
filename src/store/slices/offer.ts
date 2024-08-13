import { createSlice } from '@reduxjs/toolkit'
import { Offer, OfferFull } from '../../types/offer'
import { RequestStatus } from '../../const'
import { fetchNearOffers, fetchOffer } from '../thunks/offer'
import { toggleFavorite } from '../thunks/favorite'

interface OfferState {
	offer: OfferFull | null
	nearOffers: Offer[]
	status: RequestStatus
}

const initialState: OfferState = {
	offer: null,
	nearOffers: [],
	status: RequestStatus.Initial
}

export const offerSlice = createSlice({
	name: 'offer',
	initialState,
	reducers: {},
	selectors: {
		offer: (state) => state.offer,
		nearOffers: (state) => state.nearOffers,
		status: (state) => state.status
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOffer.pending, (state) => {
				state.status = RequestStatus.Loading
			})
			.addCase(fetchOffer.fulfilled, (state, action) => {
				state.status = RequestStatus.Success
				state.offer = action.payload
			})
			.addCase(fetchOffer.rejected, (state) => {
				state.status = RequestStatus.Failed
			})
		builder
			.addCase(fetchNearOffers.pending, (state) => {
				state.status = RequestStatus.Loading
			})
			.addCase(fetchNearOffers.fulfilled, (state, action) => {
				state.status = RequestStatus.Success
				state.nearOffers = action.payload
			})
			.addCase(fetchNearOffers.rejected, (state) => {
				state.status = RequestStatus.Failed
			})
		builder.addCase(toggleFavorite.fulfilled, (state, action) => {
			if (state.offer?.isFavorite !== undefined) {
				state.offer.isFavorite = action.payload.isFavorite
			}
		})
	}
})
