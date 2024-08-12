import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '../../types/api'
import { Endpoint } from '../../const'
import { Review, ReviewFormPayload } from '../../types/review'

export const fetchReviews = createAsyncThunk<Review[], string, ThunkConfig>('reviews/fetchReviews', async (payload, { extra: api }) => {
	const response = await api.get<Review[]>(`${Endpoint.Reviews}/${payload}`)
	return response.data
})

export const sendReview = createAsyncThunk<Review, ReviewFormPayload, ThunkConfig>(
	'reviews/sendReview',
	async ({ offerId, body }, { extra: api }) => {
		const response = await api.post<Review>(`${Endpoint.Reviews}/${offerId}`, body)
		return response.data
	}
)
