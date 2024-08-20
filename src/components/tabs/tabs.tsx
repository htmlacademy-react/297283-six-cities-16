import { MouseEvent } from 'react'
import classNames from 'classnames'
import { LOCATIONS } from '../../const'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { offersSlice } from '../../store/slices/offers'
import { setCity } from '../../store/slices/offers'
import { CityName } from '../../types/location'
import { Link } from 'react-router-dom'

export default function Tabs(): JSX.Element {
	const dispatch = useAppDispatch()
	const activeCityName = useAppSelector(offersSlice.selectors.city)

	const handleClick = (e: MouseEvent, cityName: CityName) => {
		e.preventDefault()
		dispatch(setCity(cityName))
	}

	return (
		<div className="tabs">
			<section className="locations container">
				<ul className="locations__list tabs__list">
					{LOCATIONS.map((location) => (
						<li className="locations__item" key={location.name}>
							<Link
								className={classNames('locations__item-link tabs__item', { 'tabs__item--active': location.name === activeCityName })}
								to="#"
								onClick={(e) => handleClick(e, location.name)}
							>
								<span>{location.name}</span>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</div>
	)
}
