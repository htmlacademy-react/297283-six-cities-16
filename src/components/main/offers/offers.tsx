import OfferCard from '../../offer-card/offer-card'
import { Offer } from '../../../types/offer'
import { OFFERS_NUMBER } from '../../../const'
import Sorting from '../sorting/sorting'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { offersSlice, setActiveOfferId, setSorting } from '../../../store/slices/offers'
import getEnding from '../../../utils/ending'

type OffersProps = {
	cards: Offer[]
}

export default function Offers({ cards }: OffersProps): JSX.Element {
	const dispatch = useAppDispatch()
	const sorting = useAppSelector(offersSlice.selectors.sorting)
	const activeCityName = useAppSelector(offersSlice.selectors.city)
	const ending = getEnding(cards.length, 'place', 'places')
	const placesFound = `${cards.length} ${ending} to stay in ${activeCityName}`

	return (
		<section className="cities__places places">
			<h2 className="visually-hidden">Offers</h2>
			<b className="places__found">{placesFound}</b>
			<Sorting active={sorting} setSorting={(option) => dispatch(setSorting(option))} />
			<div className="cities__places-list places__list tabs__content">
				{cards.slice(0, OFFERS_NUMBER).map((card) => (
					<OfferCard key={card.id} offer={card} setActiveOfferId={(id) => dispatch(setActiveOfferId(id))} />
				))}
			</div>
		</section>
	)
}
