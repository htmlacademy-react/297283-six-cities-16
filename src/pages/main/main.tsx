import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Header from '../../components/header/header'
import Tabs from '../../components/tabs/tabs'
import Offers from '../../components/main/offers/offers'
import EmptyOffers from '../../components/main/empty-offers/empty-offers'
import Map from '../../components/map/map'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { selectCity, selectOffers, setCity, setOffers } from '../../store/slices/offers'
import { LOCATIONS } from '../../const'
import { Point } from '../../types/location'

export default function Main(): JSX.Element {
	const dispatch = useAppDispatch()
	const activeCity = useAppSelector(selectCity)
	const offers = useAppSelector(selectOffers)
	const [activeOfferId, setActiveOfferId] = useState<null | string>(null)
	const isEmptyOffers = false

	useEffect(() => {
		dispatch(setCity('Paris'))
		dispatch(setOffers())
	}, [dispatch])

	const activeCityObj = LOCATIONS.find((location) => location.name === activeCity)

	const points: Point[] = offers.map((offer) => ({
		id: offer.id,
		title: offer.title,
		latitude: offer.location.latitude,
		longitude: offer.location.longitude
	}))

	return (
		<div className="page page--gray page--main">
			<Header />
			<main className={classNames('page__main page__main--index', { 'page__main--index-empty': isEmptyOffers })}>
				<h1 className="visually-hidden">Cities</h1>
				<Tabs />
				<div className="cities">
					<div className={classNames('cities__places-container container', { 'cities__places-container--empty': isEmptyOffers })}>
						{isEmptyOffers ? <EmptyOffers /> : <Offers cards={offers} activeCity={activeCity} setActiveOfferId={setActiveOfferId} />}
						<div className="cities__right-section">
							{!isEmptyOffers && activeCityObj && <Map city={activeCityObj} activeOfferId={activeOfferId} points={points} />}
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
