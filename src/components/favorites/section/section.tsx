import { OfferCardWithCity } from '../../../types/offer'
import Card from '../card/card'
import { Cities } from '../../../types/location'

type SectionProps = {
	cards: OfferCardWithCity[]
}

type GroupedByCityCards = Partial<Record<Cities, OfferCardWithCity[]>>

export default function Section({ cards }: SectionProps): JSX.Element {
	const groupedByCity: GroupedByCityCards = cards.reduce<GroupedByCityCards>((prev, curr) => {
		const groupKey = curr.city
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
								<a className="locations__item-link" href="#">
									<span>{key}</span>
								</a>
							</div>
						</div>
						<div className="favorites__places">
							{value
								.filter((_, i) => i < 5)
								.map((card) => (
									<Card key={card.id} offer={card} />
								))}
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
