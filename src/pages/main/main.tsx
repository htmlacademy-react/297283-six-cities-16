import Header from '../../components/header/header'
import Tabs from '../../components/tabs/tabs'
import Places from '../../components/main/places/places'
import EmptyPlaces from '../../components/main/empty-places/empty-places'
import Map from '../../components/main/map/map'
import { AppProps } from '../../components/app/app'

export default function Main({ offersNumber }: AppProps): JSX.Element {
	const isEmptyPlaces = false

	return (
		<div className="page page--gray page--main">
			<Header />
			<main className={`page__main page__main--index ${isEmptyPlaces ? 'page__main--index-empty' : ''}`}>
				<h1 className="visually-hidden">Cities</h1>
				<Tabs />
				<div className="cities">
					<div className={`cities__places-container container ${isEmptyPlaces ? 'cities__places-container--empty' : ''}`}>
						{isEmptyPlaces ? <EmptyPlaces /> : <Places offersNumber={offersNumber} />}
						<div className="cities__right-section">{!isEmptyPlaces && <Map />}</div>
					</div>
				</div>
			</main>
		</div>
	)
}
