import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '../../types/api'
import { Endpoint } from '../../const'
import { Offer } from '../../types/offer'

type ToggleFavoritePayload = {
	offerId: string
	status: number
}

export const fetchFavorite = createAsyncThunk<Offer[], void, ThunkConfig>('favorite/fetchFavorite', async (_, { extra: api }) => {
	const response = await api.get<Offer[]>(`${Endpoint.Favorite}`)
	return response.data
})

export const toggleFavorite = createAsyncThunk<Offer, ToggleFavoritePayload, ThunkConfig>(
	'favorite/toggleFavorite',
	async ({ offerId, status }, { extra: api }) => {
		const response = await api.post<Offer>(`${Endpoint.Favorite}/${offerId}/${status}`)
		return response.data
	}
)
