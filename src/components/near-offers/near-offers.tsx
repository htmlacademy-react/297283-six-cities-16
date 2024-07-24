import OfferCard from '../offer-card/offer-card'
import { OfferCard as OfferCardType } from '../../types/offer'

type NearOffersProps = {
	offers: OfferCardType[]
}

export default function NearOffers({ offers }: NearOffersProps): JSX.Element {
	return (
		<section className="near-places places">
			<h2 className="near-places__title">Other places in the neighbourhood</h2>
			<div className="near-places__list places__list">
				{offers.map((offer) => (
					<OfferCard key={offer.id} offer={offer} extraClassName="near-places" />
				))}
			</div>
		</section>
	)
}
