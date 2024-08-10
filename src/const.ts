import leaflet from 'leaflet'

export const OFFERS_NUMBER = 6

export const DEFAULT_CUSTOM_ICON = leaflet.icon({
	iconUrl: '/img/pin.svg',
	iconSize: [27, 39],
	iconAnchor: [27, 39]
})

export const ACTIVE_CUSTOM_ICON = leaflet.icon({
	iconUrl: '/img/pin-active.svg',
	iconSize: [27, 39],
	iconAnchor: [27, 39]
})

export const LOCATIONS = [
	{
		name: 'Paris',
		location: {
			latitude: 48.85661,
			longitude: 2.351499,
			zoom: 13
		}
	},
	{
		name: 'Cologne',
		location: {
			latitude: 50.938361,
			longitude: 6.959974,
			zoom: 13
		}
	},
	{
		name: 'Brussels',
		location: {
			latitude: 50.846557,
			longitude: 4.351697,
			zoom: 13
		}
	},
	{
		name: 'Amsterdam',
		location: {
			latitude: 52.37454,
			longitude: 4.897976,
			zoom: 13
		}
	},
	{
		name: 'Hamburg',
		location: {
			latitude: 53.550341,
			longitude: 10.000654,
			zoom: 13
		}
	},
	{
		name: 'Dusseldorf',
		location: {
			latitude: 51.225402,
			longitude: 6.776314,
			zoom: 13
		}
	}
] as const

export const SORTING_OPTIONS_MAP = {
	popular: 'Popular',
	priceLowToHigh: 'Price: low to high',
	priceHighToLow: 'Price: high to low',
	topRated: 'Top rated first'
} as const

export const ENDPOINTS = {
	offers: '/offers',
	favorite: '/favorite',
	login: '/login',
	logout: '/logout',
	comments: '/comments'
} as const

export enum RequestStatus {
	Initial = 'Initial',
	Loading = 'Loading',
	Success = 'Success',
	Failed = 'Failed'
}
