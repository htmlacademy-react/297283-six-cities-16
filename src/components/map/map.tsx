import { layerGroup } from 'leaflet'
import { useRef, useEffect, useState } from 'react'
import leaflet from 'leaflet'
import { City, Point } from '../../types/location'
import useMapLibrary from '../../hooks/use-map-library'
import { ACTIVE_CUSTOM_ICON, DEFAULT_CUSTOM_ICON, LOCATIONS } from '../../const'
import { useAppSelector } from '../../hooks/hooks'
import { offersSlice } from '../../store/slices/offers'

type MapProps = {
	points: Point[]
	extraClassName?: string
}

export default function Map({ points, extraClassName = 'cities' }: MapProps): JSX.Element {
	const mapRef = useRef(null)
	const layerRef = useRef(layerGroup())
	const activeCityName = useAppSelector(offersSlice.selectors.city)
	const activeCityObj = LOCATIONS.find((location) => location.name === activeCityName)
	const mapLibrary = useMapLibrary(mapRef, activeCityObj as City)
	const [isLayerAdded, setIsLayerAdded] = useState(false)
	const activeOfferId = useAppSelector(offersSlice.selectors.activeOfferId)

	useEffect(() => {
		if (mapLibrary) {
			if (!isLayerAdded) {
				layerRef.current.addTo(mapLibrary)
				setIsLayerAdded(true)
			}
			layerRef.current.clearLayers()
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
					.addTo(layerRef.current)
			})
		}
	}, [mapLibrary, points, activeOfferId, isLayerAdded])

	return <section className={`${extraClassName}__map map`} ref={mapRef}></section>
}
