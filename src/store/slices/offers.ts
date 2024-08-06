import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import OFFERS from '../../mocks/offers'
import { CityName } from '../../types/location'
import { Offer } from '../../types/offer'
import { SortingOptions } from '../../types/sorting'

interface InitialState {
	city: CityName
	offers: Offer[]
	sorting: SortingOptions
}

const initialState: InitialState = {
	city: 'Paris',
	offers: OFFERS,
	sorting: 'popular'
}

export const offersSlice = createSlice({
	name: 'offers',
	initialState,
	reducers: {
		setCity: (state, action: PayloadAction<CityName>) => {
			state.city = action.payload
		},
		setSorting: (state, action: PayloadAction<SortingOptions>) => {
			state.sorting = action.payload
		}
	}
})

export const { setCity, setSorting } = offersSlice.actions

export const selectCity = (state: RootState) => state.offers.city
export const selectOffers = (state: RootState) => state.offers.offers
export const selectOffersByCity = createSelector([selectCity, selectOffers], (city, offers) =>
	offers.filter((offer) => offer.city.name === city)
)
export const selectSorting = (state: RootState) => state.offers.sorting

export default offersSlice.reducer
