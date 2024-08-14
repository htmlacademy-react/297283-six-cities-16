import classNames from 'classnames'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Section from '../../components/favorites/section/section'
import EmptyCards from '../../components/favorites/empty-cards/empty-cards'
import { useAppSelector } from '../../hooks/hooks'
import { favoriteSlice } from '../../store/slices/favorite'

export default function Favorites(): JSX.Element {
	const favorites = useAppSelector(favoriteSlice.selectors.favorite)

	const isEmptyFavorites = !favorites.length

	return (
		<div className={classNames('page', { 'page--favorites-empty': isEmptyFavorites })}>
			<Header />
			<main className={classNames('page__main page__main--favorites', { 'page__main--favorites-empty': isEmptyFavorites })}>
				<div className="page__favorites-container container">{isEmptyFavorites ? <EmptyCards /> : <Section cards={favorites} />}</div>
			</main>
			<Footer />
		</div>
	)
}
