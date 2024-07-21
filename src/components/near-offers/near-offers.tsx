import OfferCard from '../offer-card/offer-card'
import offersMock from '../../mocks/offers'

export default function NearOffers(): JSX.Element {
	return (
		<section className="near-places places">
			<h2 className="near-places__title">Other places in the neighbourhood</h2>
			<div className="near-places__list places__list">
				{offersMock.slice(0, 3).map((offer) => (
					<OfferCard key={offer.id} offer={offer} extraClassName="near-places" />
				))}
			</div>
		</section>
	)
}
