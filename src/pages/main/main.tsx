import classNames from 'classnames'
import Header from '../../components/header/header'
import Tabs from '../../components/tabs/tabs'
import Offers from '../../components/main/offers/offers'
import EmptyOffers from '../../components/main/empty-offers/empty-offers'
import Map from '../../components/main/map/map'
import offersMock from '../../mocks/offers'
import { useState } from 'react'

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
						{isEmptyOffers ? <EmptyOffers /> : <Offers cards={offersMock} setActiveOfferId={setActiveOfferId} />}
						<div className="cities__right-section">{!isEmptyOffers && <Map activeOfferId={activeOfferId} />}</div>
					</div>
				</div>
			</main>
		</div>
	)
}
