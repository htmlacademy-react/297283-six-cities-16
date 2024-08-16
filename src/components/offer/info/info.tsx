import { OfferFull } from '../../../types/offer'
import Toggler from '../../favorites/toggler/toggler'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { toggleFavorite } from '../../../store/thunks/favorite'
import { authSlice } from '../../../store/slices/auth'
import { AuthStatus } from '../../../const'
import { useNavigate } from 'react-router-dom'

type InfoProps = {
	offer: Pick<OfferFull, 'id' | 'title' | 'isPremium' | 'isFavorite' | 'rating' | 'type' | 'bedrooms' | 'maxAdults' | 'price' | 'goods'>
}

export default function Info({ offer }: InfoProps): JSX.Element {
	const { id, title, isPremium, isFavorite, rating, type, bedrooms, maxAdults, price, goods } = offer
	const dispatch = useAppDispatch()
	const authStatus = useAppSelector(authSlice.selectors.authStatus)
	const navigate = useNavigate()

	const handleToggleFavorite = () => {
		if (authStatus !== AuthStatus.Auth) {
			return navigate('/login')
		}
		dispatch(toggleFavorite({ offerId: id, status: isFavorite ? 0 : 1 }))
	}

	return (
		<>
			{isPremium && (
				<div className="offer__mark">
					<span>Premium</span>
				</div>
			)}
			<div className="offer__name-wrapper">
				<h1 className="offer__name">{title}</h1>
				<Toggler active={isFavorite} extraClassName="offer" size={[31, 33]} toggle={handleToggleFavorite} />
			</div>
			<div className="offer__rating rating">
				<div className="offer__stars rating__stars">
					<span style={{ width: `${Math.round(rating) * 20}%` }} />
					<span className="visually-hidden">Rating</span>
				</div>
				<span className="offer__rating-value rating__value">{rating}</span>
			</div>
			<ul className="offer__features">
				<li className="offer__feature offer__feature--entire">{type[0].toUpperCase() + type.slice(1)}</li>
				<li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
				<li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>
			</ul>
			<div className="offer__price">
				<b className="offer__price-value">€{price}</b>
				<span className="offer__price-text">&nbsp;night</span>
			</div>
			<div className="offer__inside">
				<h2 className="offer__inside-title">What&apos;s inside</h2>
				<ul className="offer__inside-list">
					{goods.map((good) => (
						<li className="offer__inside-item" key={good}>
							{good}
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
