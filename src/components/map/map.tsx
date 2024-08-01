import { useRef, useEffect } from 'react'
import leaflet from 'leaflet'
import { City, Point } from '../../types/location'
import useMapLibrary from '../../hooks/useMapLibrary'
import { ACTIVE_CUSTOM_ICON, DEFAULT_CUSTOM_ICON } from '../../const'

type MapProps = {
	activeOfferId?: null | string
	city: City
	points: Point[]
	extraClassName?: string
}

export default function Map({ activeOfferId, city, points, extraClassName = 'cities' }: MapProps): JSX.Element {
	const mapRef = useRef(null)
	const map = useMapLibrary(mapRef, city)

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

	return <section className={`${extraClassName}__map map`} ref={mapRef}></section>
}
