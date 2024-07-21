import Header from '../../components/header/header'
import Gallery from '../../components/offer/gallery/gallery'
import Map from '../../components/offer/map/map'
import Info from '../../components/offer/info/info'
import Host from '../../components/offer/host/host'
import NearOffers from '../../components/near-offers/near-offers'
import Reviews from '../../components/offer/review/section/section'
import REVIEWS from '../../mocks/reviews'

export default function Favorites(): JSX.Element {
	return (
		<div className="page">
			<Header />
			<main className="page__main page__main--offer">
				<section className="offer">
					<Gallery />
					<div className="offer__container container">
						<div className="offer__wrapper">
							<Info />
							<Host />
							<Reviews isLoggedIn reviews={REVIEWS} />
						</div>
					</div>
					<Map />
				</section>
				<div className="container">
					<NearOffers />
				</div>
			</main>
		</div>
	)
}
