import classNames from 'classnames'
import Header from '../../components/header/header'
import Tabs from '../../components/tabs/tabs'
import Offers from '../../components/main/offers/offers'
import EmptyOffers from '../../components/main/empty-offers/empty-offers'
import Map from '../../components/main/map/map'
import offersMock from '../../mocks/offers'
import { OfferCard } from '../../types/offer'

export type MainPageProps = {
	offersNumber: number
}

export default function Main({ offersNumber }: MainPageProps): JSX.Element {
	const isEmptyOffers = false

	const cards: OfferCard[] = offersMock.map((offer) => ({
		id: offer.id,
		title: offer.title,
		type: offer.type,
		price: offer.price,
		isFavorite: offer.isFavorite,
		isPremium: offer.isPremium,
		rating: offer.rating,
		previewImage: offer.previewImage
	}))

	return (
		<div className="page page--gray page--main">
			<Header />
			<main className={classNames('page__main page__main--index', { 'page__main--index-empty': isEmptyOffers })}>
				<h1 className="visually-hidden">Cities</h1>
				<Tabs />
				<div className="cities">
					<div className={classNames('cities__places-container container', { 'cities__places-container--empty': isEmptyOffers })}>
						{isEmptyOffers ? <EmptyOffers /> : <Offers offersNumber={offersNumber} cards={cards} />}
						<div className="cities__right-section">{!isEmptyOffers && <Map />}</div>
					</div>
				</div>
			</main>
		</div>
	)
}
