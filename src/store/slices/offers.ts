import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CityName } from '../../types/location'
import { Offer } from '../../types/offer'
import { SortingOptions } from '../../types/sorting'
import { fetchOffers } from '../thunks/offers'
import { RequestStatus } from '../../const'

interface OffersState {
	city: CityName
	offers: Offer[]
	sorting: SortingOptions
	activeOfferId: string
	status: RequestStatus
}

const initialState: OffersState = {
	city: 'Paris',
	offers: [],
	sorting: 'popular',
	activeOfferId: '',
	status: RequestStatus.Initial
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
		},
		setActiveOfferId: (state, action: PayloadAction<string>) => {
			state.activeOfferId = action.payload
		}
	},
	selectors: {
		city: (state) => state.city,
		offers: (state) => state.offers,
		sorting: (state) => state.sorting,
		activeOfferId: (state) => state.activeOfferId,
		status: (state) => state.status
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOffers.pending, (state) => {
				state.status = RequestStatus.Loading
			})
			.addCase(fetchOffers.fulfilled, (state, action) => {
				state.status = RequestStatus.Success
				state.offers = action.payload
			})
			.addCase(fetchOffers.rejected, (state) => {
				state.status = RequestStatus.Failed
			})
	}
})

export const selectOffersByCityAndSorting = createSelector(
	[offersSlice.selectors.city, offersSlice.selectors.offers, offersSlice.selectors.sorting],
	(city, offers, sorting) =>
		offers
			.filter((offer) => offer.city.name === city)
			.sort((a, b): number => {
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

export const { setCity, setSorting, setActiveOfferId } = offersSlice.actions
