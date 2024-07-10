import PlaceCard from '../../place-card/place-card'
import { AppProps } from '../../../components/app/app'
import { PlaceCard as PlaceCardType } from '../../../pages/main/main'

type PlacesProps = AppProps & { cards: PlaceCardType[] }

export default function Places({ offersNumber, cards }: PlacesProps): JSX.Element {
	return (
		<section className="cities__places places">
			<h2 className="visually-hidden">Places</h2>
			<b className="places__found">312 places to stay in Amsterdam</b>
			<form className="places__sorting" action="#" method="get">
				<span className="places__sorting-caption">Sort by</span>
				<span className="places__sorting-type" tabIndex={0}>
					Popular
					<svg className="places__sorting-arrow" width={7} height={4}>
						<use xlinkHref="#icon-arrow-select" />
					</svg>
				</span>
				<ul className="places__options places__options--custom places__options--opened">
					<li className="places__option places__option--active" tabIndex={0}>
						Popular
					</li>
					<li className="places__option" tabIndex={0}>
						Price: low to high
					</li>
					<li className="places__option" tabIndex={0}>
						Price: high to low
					</li>
					<li className="places__option" tabIndex={0}>
						Top rated first
					</li>
				</ul>
			</form>
			<div className="cities__places-list places__list tabs__content">
				{cards
					.filter((_, i) => i < offersNumber)
					.map((card) => (
						<PlaceCard key={card.id} place={card} />
					))}
			</div>
		</section>
	)
}
