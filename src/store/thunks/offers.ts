import { createAsyncThunk } from '@reduxjs/toolkit'
import { Offer } from '../../types/offer'
import { ThunkConfig } from '../../types/api'
import { ENDPOINTS } from '../../const'

export const fetchOffers = createAsyncThunk<Offer[], void, ThunkConfig>('offers/fetchOffers', async (_, { extra: api }) => {
	const response = await api.get<Offer[]>(ENDPOINTS.offers)
	return response.data
})
