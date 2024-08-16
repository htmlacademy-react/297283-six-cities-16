import Header from '../../components/header/header'
import Gallery from '../../components/offer/gallery/gallery'
import Map from '../../components/map/map'
import Info from '../../components/offer/info/info'
import Host from '../../components/offer/host/host'
import NearOffers from '../../components/near-offers/near-offers'
import Reviews from '../../components/offer/review/section/section'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchNearOffers, fetchOffer } from '../../store/thunks/offer'
import { useNavigate, useParams } from 'react-router-dom'
import { offerSlice } from '../../store/slices/offer'
import Loader from '../../components/loader/loader'
import { setActiveOfferId, setCity } from '../../store/slices/offers'
import { fetchReviews } from '../../store/thunks/reviews'
import { reviewsSlice } from '../../store/slices/reviews'
import { Point } from '../../types/location'
import { authSlice } from '../../store/slices/auth'
import { RequestStatus } from '../../const'

export default function Offer(): JSX.Element {
	const dispatch = useAppDispatch()
	const { id } = useParams()
	const authStatus = useAppSelector(authSlice.selectors.authStatus)
	const status = useAppSelector(offerSlice.selectors.status)
	const offer = useAppSelector(offerSlice.selectors.offer)
	const nearOffers = useAppSelector(offerSlice.selectors.nearOffers)
	const reviews = useAppSelector(reviewsSlice.selectors.reviews)
	const navigate = useNavigate()

	useEffect(() => {
		Promise.all([dispatch(fetchOffer(id!)), dispatch(fetchNearOffers(id!)), dispatch(fetchReviews(id!))])
	}, [dispatch, id])

	useEffect(() => {
		if (status === RequestStatus.Failed) {
			navigate('/404')
		}
	}, [navigate, status])

	useEffect(() => {
		if (offer) {
			dispatch(setCity(offer.city.name))
			dispatch(setActiveOfferId(offer.id))
		}
		return () => {
			dispatch(setActiveOfferId(''))
		}
	}, [dispatch, offer])

	const points: Point[] = offer ? [offer, ...nearOffers].slice(0, 4) : []

	return (
		<div className="page">
			<Header />
			{!offer ? (
				<Loader />
			) : (
				<main className="page__main page__main--offer">
					<section className="offer">
						<Gallery images={offer.images.slice(0, 6)} />
						<div className="offer__container container">
							<div className="offer__wrapper">
								<Info offer={offer} />
								<Host host={offer.host} description={offer.description} />
								<Reviews isLoggedIn={authStatus} reviews={reviews} />
							</div>
						</div>
						<Map points={points} extraClassName="offer" />
					</section>
					<div className="container">
						<NearOffers offers={nearOffers.slice(0, 3)} />
					</div>
				</main>
			)}
		</div>
	)
}
