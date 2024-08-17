import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus } from '../../const'
import { Review } from '../../types/review'
import { fetchReviews, sendReview } from '../thunks/reviews'

interface reviewsState {
	reviews: Review[]
	status: RequestStatus
}

const initialState: reviewsState = {
	reviews: [],
	status: RequestStatus.Initial
}

export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		setReviews: (state, action: PayloadAction<Review[]>) => {
			state.reviews = action.payload
		}
	},
	selectors: {
		reviews: (state) => state.reviews,
		status: (state) => state.status
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchReviews.pending, (state) => {
				state.status = RequestStatus.Loading
			})
			.addCase(fetchReviews.fulfilled, (state, action) => {
				state.status = RequestStatus.Success
				state.reviews = action.payload
			})
			.addCase(fetchReviews.rejected, (state) => {
				state.status = RequestStatus.Failed
			})
		builder
			.addCase(sendReview.pending, (state) => {
				state.status = RequestStatus.Loading
			})
			.addCase(sendReview.fulfilled, (state, action) => {
				state.status = RequestStatus.Success
				state.reviews.unshift(action.payload)
			})
			.addCase(sendReview.rejected, (state) => {
				state.status = RequestStatus.Failed
			})
	}
})

export const { setReviews } = reviewsSlice.actions
