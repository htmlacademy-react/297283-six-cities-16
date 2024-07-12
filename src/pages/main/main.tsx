import Header from '../../components/header/header'
import Tabs from '../../components/tabs/tabs'
import Places from '../../components/main/places/places'
import EmptyPlaces from '../../components/main/empty-places/empty-places'
import Map from '../../components/main/map/map'
import placesMock from '../../mock/places'

type MainProps = {
	offersNumber: number
}

interface Place {
	id: string
	title: string
	type: string
	price: number
	city: {
		name: string
		location: {
			latitude: number
			longitude: number
			zoom: number
		}
	}
	location: {
		latitude: number
		longitude: number
		zoom: number
	}
	isFavorite: boolean
	isPremium: boolean
	rating: number
	previewImage: string
}

export type PlaceCard = Omit<Place, 'city' | 'location'>

export default function Main({ offersNumber }: MainProps): JSX.Element {
	const isEmptyPlaces = false

	const cards: PlaceCard[] = placesMock.map((place) => ({
		id: place.id,
		title: place.title,
		type: place.type,
		price: place.price,
		isFavorite: place.isFavorite,
		isPremium: place.isPremium,
		rating: place.rating,
		previewImage: place.previewImage
	}))

	return (
		<div className="page page--gray page--main">
			<Header />
			<main className={`page__main page__main--index ${isEmptyPlaces ? 'page__main--index-empty' : ''}`}>
				<h1 className="visually-hidden">Cities</h1>
				<Tabs />
				<div className="cities">
					<div className={`cities__places-container container ${isEmptyPlaces ? 'cities__places-container--empty' : ''}`}>
						{isEmptyPlaces ? <EmptyPlaces /> : <Places offersNumber={offersNumber} cards={cards} />}
						<div className="cities__right-section">{!isEmptyPlaces && <Map />}</div>
					</div>
				</div>
			</main>
		</div>
	)
}
