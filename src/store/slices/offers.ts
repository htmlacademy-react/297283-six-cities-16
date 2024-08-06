import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import OFFERS from '../../mocks/offers'
import { Cities } from '../../types/location'
import { Offer } from '../../types/offer'
import { SortingOptions } from '../../types/sorting'

interface InitialState {
	city: Cities | ''
	offers: Offer[]
	sorting: SortingOptions
}

const initialState: InitialState = {
	city: '',
	offers: [],
	sorting: 'popular'
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
		},
		setSorting: (state, action: PayloadAction<SortingOptions>) => {
			state.sorting = action.payload
		}
	}
})

export const { setCity, setOffers, setSorting } = offersSlice.actions

export const selectCity = (state: RootState) => state.offers.city
export const selectOffers = (state: RootState) => state.offers.offers
export const selectSorting = (state: RootState) => state.offers.sorting

export default offersSlice.reducer
