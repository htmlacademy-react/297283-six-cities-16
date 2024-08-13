import classNames from 'classnames'
import Header from '../../components/header/header'
import Tabs from '../../components/tabs/tabs'
import Offers from '../../components/main/offers/offers'
import EmptyOffers from '../../components/main/empty-offers/empty-offers'
import Map from '../../components/map/map'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { offersSlice, selectOffersByCityAndSorting } from '../../store/slices/offers'
import { Point } from '../../types/location'
import { useEffect } from 'react'
import { fetchOffers } from '../../store/thunks/offers'
import Loader from '../../components/loader/loader'
import { RequestStatus } from '../../const'

export default function Main(): JSX.Element {
	const dispatch = useAppDispatch()
	const offers = useAppSelector(selectOffersByCityAndSorting)
	const status = useAppSelector(offersSlice.selectors.status)
	const city = useAppSelector(offersSlice.selectors.city)

	const points: Point[] = offers.map((offer) => ({
		id: offer.id,
		title: offer.title,
		latitude: offer.location.latitude,
		longitude: offer.location.longitude
	}))

	useEffect(() => {
		if (status === RequestStatus.Initial) {
			dispatch(fetchOffers())
		}
	}, [dispatch, status])

	const isEmptyOffers = status === RequestStatus.Success && offers.length === 0

	return (
		<div className="page page--gray page--main">
			{status === RequestStatus.Loading && <Loader />}
			<Header />
			<main className={classNames('page__main page__main--index', { 'page__main--index-empty': isEmptyOffers })}>
				<h1 className="visually-hidden">Cities</h1>
				<Tabs />
				<div className="cities">
					<div className={classNames('cities__places-container container', { 'cities__places-container--empty': isEmptyOffers })}>
						{isEmptyOffers ? <EmptyOffers city={city} /> : <Offers cards={offers} />}
						<div className="cities__right-section">{!isEmptyOffers && <Map points={points} />}</div>
					</div>
				</div>
			</main>
		</div>
	)
}
