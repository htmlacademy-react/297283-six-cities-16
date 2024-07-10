import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Section from '../../components/favorites/section/section'
import EmptyCards from '../../components/favorites/empty-cards/empty-cards'

export default function Favorites(): JSX.Element {
	const isEmptyFavorites = false

	return (
		<div className={`page ${isEmptyFavorites ? 'page--favorites-empty' : ''}`}>
			<Header />
			<main className={`page__main page__main--favorites ${isEmptyFavorites ? 'page__main--favorites-empty' : ''}`}>
				<div className="page__favorites-container container">{isEmptyFavorites ? <EmptyCards /> : <Section />}</div>
			</main>
			<Footer />
		</div>
	)
}
