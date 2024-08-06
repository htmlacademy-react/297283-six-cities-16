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
export const selectSorting = (state: RootState) => state.offers.sorting
export const selectOffersByCityAndSorting = createSelector([selectCity, selectOffers, selectSorting], (city, offers, sorting) =>
	offers
		.filter((offer) => offer.city.name === city)
		.sort((a: Offer, b: Offer): number => {
			switch (sorting) {
				case 'popular':
					return 1
				case 'priceHighToLow':
					return b.price - a.price
				case 'priceLowToHigh':
					return a.price - b.price
				case 'topRated':
					return b.rating - a.rating
				default:
					return 1
			}
		})
)

export default offersSlice.reducer
