import { Offer } from '../../../types/offer'
import OfferCard from '../../offer-card/offer-card'
import { CityName } from '../../../types/location'
import { Link } from 'react-router-dom'

type SectionProps = {
	cards: Offer[]
}

type GroupedByCityCards = Partial<Record<CityName, Offer[]>>

export default function Section({ cards }: SectionProps): JSX.Element {
	const groupedByCity: GroupedByCityCards = cards.reduce<GroupedByCityCards>((prev, curr) => {
		const groupKey = curr.city.name
		const group = prev[groupKey] || []
		group.push(curr)
		return { ...prev, [groupKey]: group }
	}, {})

	return (
		<section className="favorites">
			<h1 className="favorites__title">Saved listing</h1>
			<ul className="favorites__list">
				{Object.entries(groupedByCity).map(([key, value]) => (
					<li className="favorites__locations-items" key={key}>
						<div className="favorites__locations locations locations--current">
							<div className="locations__item">
								<Link className="locations__item-link" to="">
									<span>{key}</span>
								</Link>
							</div>
						</div>
						<div className="favorites__places">
							{value
								.filter((_, i) => i < 5)
								.map((card) => (
									<OfferCard key={card.id} offer={card} extraClassName="favorites" imageSize={[150, 110]} />
								))}
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
