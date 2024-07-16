import classNames from 'classnames'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Section from '../../components/favorites/section/section'
import EmptyCards from '../../components/favorites/empty-cards/empty-cards'
import offersMock from '../../mocks/offers'
import { OfferCardWithCity } from '../../types/offer'

export default function Favorites(): JSX.Element {
	const isEmptyFavorites = false

	const cards: OfferCardWithCity[] = offersMock.map((offer) => ({
		id: offer.id,
		title: offer.title,
		type: offer.type,
		price: offer.price,
		isFavorite: true,
		isPremium: offer.isPremium,
		rating: offer.rating,
		previewImage: offer.previewImage,
		city: offer.city.name
	}))

	return (
		<div className={classNames('page', { 'page--favorites-empty': isEmptyFavorites })}>
			<Header />
			<main className={classNames('page__main page__main--favorites', { 'page__main--favorites-empty': isEmptyFavorites })}>
				<div className="page__favorites-container container">{isEmptyFavorites ? <EmptyCards /> : <Section cards={cards} />}</div>
			</main>
			<Footer />
		</div>
	)
}
