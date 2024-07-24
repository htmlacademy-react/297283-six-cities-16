import { useState } from 'react'
import classNames from 'classnames'
import Header from '../../components/header/header'
import Tabs from '../../components/tabs/tabs'
import Offers from '../../components/main/offers/offers'
import EmptyOffers from '../../components/main/empty-offers/empty-offers'
import Map from '../../components/main/map/map'
import OFFERS from '../../mocks/offers'
import POINTS from '../../mocks/points'
import CITY from '../../mocks/city'

export default function Main(): JSX.Element {
	const [activeOfferId, setActiveOfferId] = useState<null | string>(null)
	const isEmptyOffers = false

	return (
		<div className="page page--gray page--main">
			<Header />
			<main className={classNames('page__main page__main--index', { 'page__main--index-empty': isEmptyOffers })}>
				<h1 className="visually-hidden">Cities</h1>
				<Tabs />
				<div className="cities">
					<div className={classNames('cities__places-container container', { 'cities__places-container--empty': isEmptyOffers })}>
						{isEmptyOffers ? <EmptyOffers /> : <Offers cards={OFFERS} setActiveOfferId={setActiveOfferId} />}
						<div className="cities__right-section">
							{!isEmptyOffers && <Map activeOfferId={activeOfferId} city={CITY} points={POINTS} />}
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
