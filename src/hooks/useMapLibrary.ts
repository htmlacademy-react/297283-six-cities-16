import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useRef, useState, useEffect, MutableRefObject } from 'react'
import { City } from '../types/location'

export default function useMapLibrary(mapRef: MutableRefObject<HTMLElement | null>, city: City) {
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

	return map
}
