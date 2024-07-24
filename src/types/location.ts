import { CITIES } from '../const'

export type Cities = (typeof CITIES)[number]

export interface City {
	name: Cities
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
	latitude: number
	longitude: number
}
