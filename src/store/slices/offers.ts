import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import OFFERS from '../../mocks/offers'
import { Cities } from '../../types/location'
import { Offer } from '../../types/offer'

interface InitialState {
	city: Cities | ''
	offers: Offer[]
}

const initialState: InitialState = {
	city: '',
	offers: []
}

export const offersSlice = createSlice({
	name: 'offers',
	initialState,
	reducers: {
		setCity: (state, action: PayloadAction<Cities>) => {
			state.city = action.payload
		},
		setOffers: (state) => {
			state.offers = OFFERS.filter((offer) => offer.city.name === state.city)
		}
	}
})

export const { setCity, setOffers } = offersSlice.actions

export const selectCity = (state: RootState) => state.offers.city
export const selectOffers = (state: RootState) => state.offers.offers

export default offersSlice.reducer
