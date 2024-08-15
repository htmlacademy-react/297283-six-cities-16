import { LOCATIONS } from '../const'

export type CityName = (typeof LOCATIONS)[number]['name']

export interface City {
	name: CityName
	location: Location
}

export interface Location {
	latitude: number
	longitude: number
	zoom: number
}

export interface Point {
	id: string
	title: string
	location: Location
}
