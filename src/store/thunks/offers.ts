import { createAsyncThunk } from '@reduxjs/toolkit'
import { Offer } from '../../types/offer'
import { ThunkConfig } from '../../types/api'
import { Endpoint } from '../../const'

export const fetchOffers = createAsyncThunk<Offer[], void, ThunkConfig>('offers/fetchOffers', async (_, { extra: api }) => {
	const response = await api.get<Offer[]>(Endpoint.Offers)
	return response.data
})
