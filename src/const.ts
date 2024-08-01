import leaflet from 'leaflet'

export const OFFERS_NUMBER = 6

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const

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
