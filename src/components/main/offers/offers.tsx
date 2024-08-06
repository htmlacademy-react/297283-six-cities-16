import OfferCard from '../../offer-card/offer-card'
import { Offer } from '../../../types/offer'
import { OFFERS_NUMBER } from '../../../const'
import { CityName } from '../../../types/location'
import Sorting from '../sorting/sorting'
import { SortingOptions } from '../../../types/sorting'

type OffersProps = {
	cards: Offer[]
	activeCity: CityName
	setActiveOfferId: (id: string | null) => void
	sorting: SortingOptions
	setSorting: (option: SortingOptions) => void
}

export default function Offers({ cards, activeCity, setActiveOfferId, sorting, setSorting }: OffersProps): JSX.Element {
	return (
		<section className="cities__places places">
			<h2 className="visually-hidden">Offers</h2>
			<b className="places__found">
				{cards.length} places to stay in {activeCity}
			</b>
			<Sorting active={sorting} setSorting={setSorting} />
			<div className="cities__places-list places__list tabs__content">
				{cards.slice(0, OFFERS_NUMBER).map((card) => (
					<OfferCard key={card.id} offer={card} setActiveOfferId={setActiveOfferId} />
				))}
			</div>
		</section>
	)
}
