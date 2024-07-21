import classNames from 'classnames'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Section from '../../components/favorites/section/section'
import EmptyCards from '../../components/favorites/empty-cards/empty-cards'
import OFFERS_MOCK from '../../mocks/offers'

export default function Favorites(): JSX.Element {
	const isEmptyFavorites = false

	return (
		<div className={classNames('page', { 'page--favorites-empty': isEmptyFavorites })}>
			<Header />
			<main className={classNames('page__main page__main--favorites', { 'page__main--favorites-empty': isEmptyFavorites })}>
				<div className="page__favorites-container container">{isEmptyFavorites ? <EmptyCards /> : <Section cards={OFFERS_MOCK} />}</div>
			</main>
			<Footer />
		</div>
	)
}
