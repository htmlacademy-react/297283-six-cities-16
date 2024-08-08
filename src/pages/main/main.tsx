import classNames from 'classnames'
import Header from '../../components/header/header'
import Tabs from '../../components/tabs/tabs'
import Offers from '../../components/main/offers/offers'
import EmptyOffers from '../../components/main/empty-offers/empty-offers'
import Map from '../../components/map/map'
import { useAppSelector } from '../../hooks/hooks'
import { selectOffersByCityAndSorting } from '../../store/slices/offers'
import { Point } from '../../types/location'

export default function Main(): JSX.Element {
	const offers = useAppSelector(selectOffersByCityAndSorting)
	const isEmptyOffers = false

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
						{isEmptyOffers ? <EmptyOffers /> : <Offers cards={offers} />}
						<div className="cities__right-section">{!isEmptyOffers && <Map points={points} />}</div>
					</div>
				</div>
			</main>
		</div>
	)
}
