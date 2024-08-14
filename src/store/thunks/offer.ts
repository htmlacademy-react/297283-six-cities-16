import { createAsyncThunk } from '@reduxjs/toolkit'
import { Offer, OfferFull } from '../../types/offer'
import { ThunkConfig } from '../../types/api'
import { Endpoint } from '../../const'

export const fetchOffer = createAsyncThunk<OfferFull, string, ThunkConfig>('offer/fetchOffer', async (payload, { extra: api }) => {
	const response = await api.get<OfferFull>(`${Endpoint.Offers}/${payload}`)
	return response.data
})

export const fetchNearOffers = createAsyncThunk<Offer[], string, ThunkConfig>('offer/fetchNearOffers', async (payload, { extra: api }) => {
	const response = await api.get<Offer[]>(`${Endpoint.Offers}/${payload}/nearby`)
	return response.data
})
