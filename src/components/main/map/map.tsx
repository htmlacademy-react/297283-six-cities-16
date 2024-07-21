import { useEffect, useRef, useState } from 'react'
import { City, Point } from '../../../types/location'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

type MapProps = {
	activeOfferId: null | string
	city: City
	points: Point[]
}

const DEFAULT_CUSTOM_ICON = leaflet.icon({
	iconUrl: '/img/pin.svg',
	iconSize: [27, 39],
	iconAnchor: [27, 39]
})

const ACTIVE_CUSTOM_ICON = leaflet.icon({
	iconUrl: '/img/pin-active.svg',
	iconSize: [27, 39],
	iconAnchor: [27, 39]
})

export default function Map({ activeOfferId, city, points }: MapProps): JSX.Element {
	const mapRef = useRef(null)
	const isRenderedRef = useRef(false)
	const [map, setMap] = useState<leaflet.Map | null>(null)

	useEffect(() => {
		if (mapRef.current !== null && !isRenderedRef.current) {
			const instance = leaflet.map(mapRef.current, {
				center: {
					lat: city.location.latitude,
					lng: city.location.longitude
				},
				zoom: city.location.zoom
			})

			leaflet
				.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
				})
				.addTo(instance)

			setMap(instance)
			isRenderedRef.current = true
		}
	}, [mapRef, city])

	useEffect(() => {
		if (map) {
			points.forEach((point) => {
				leaflet
					.marker(
						{
							lat: point.latitude,
							lng: point.longitude
						},
						{
							icon: point.id === activeOfferId ? ACTIVE_CUSTOM_ICON : DEFAULT_CUSTOM_ICON
						}
					)
					.addTo(map)
			})
		}
	}, [map, points, activeOfferId])

	return <section className="cities__map map" ref={mapRef}></section>
}
