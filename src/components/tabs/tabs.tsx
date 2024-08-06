import { MouseEvent } from 'react'
import classNames from 'classnames'
import { LOCATIONS } from '../../const'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { selectCity } from '../../store/slices/offers'
import { setCity, setOffers } from '../../store/slices/offers'
import { CityName } from '../../types/location'

export default function Tabs(): JSX.Element {
	const dispatch = useAppDispatch()
	const activeCity = useAppSelector(selectCity)

	const handleClick = (e: MouseEvent, newLocation: CityName) => {
		e.preventDefault()
		dispatch(setCity(newLocation))
		dispatch(setOffers())
	}

	return (
		<div className="tabs">
			<section className="locations container">
				<ul className="locations__list tabs__list">
					{LOCATIONS.map((location) => (
						<li className="locations__item" key={location.name}>
							<a
								className={classNames('locations__item-link tabs__item', { 'tabs__item--active': location.name === activeCity })}
								href="#"
								onClick={(e) => handleClick(e, location.name)}
							>
								<span>{location.name}</span>
							</a>
						</li>
					))}
				</ul>
			</section>
		</div>
	)
}
