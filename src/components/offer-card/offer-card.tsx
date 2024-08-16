import { OfferCard as OfferCardType } from '../../types/offer'
import { Link, useNavigate } from 'react-router-dom'
import Toggler from '../favorites/toggler/toggler'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { toggleFavorite } from '../../store/thunks/favorite'
import { AuthStatus } from '../../const'
import { authSlice } from '../../store/slices/auth'

type OfferCardProps = {
	offer: OfferCardType
	extraClassName?: string
	imageSize?: [number, number]
	setActiveOfferId?: (id: string) => void
}

export default function OfferCard({
	offer,
	extraClassName = 'cities',
	imageSize = [260, 200],
	setActiveOfferId
}: OfferCardProps): JSX.Element {
	const { id, title, type, price, isFavorite, isPremium, rating, previewImage } = offer
	const dispatch = useAppDispatch()
	const authStatus = useAppSelector(authSlice.selectors.authStatus)
	const navigate = useNavigate()

	const handleMouseEnter = () => setActiveOfferId?.(id)
	const handleMouseLeave = () => setActiveOfferId?.('')

	const handleToggleFavorite = () => {
		if (authStatus !== AuthStatus.Auth) {
			return navigate('/login')
		}
		dispatch(toggleFavorite({ offerId: id, status: isFavorite ? 0 : 1 }))
	}

	return (
		<article className={`${extraClassName}__card place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>
			)}
			<div className={`${extraClassName}__image-wrapper place-card__image-wrapper`}>
				<Link to={`/offer/${id}`}>
					<img className="place-card__image" src={previewImage} width={imageSize[0]} height={imageSize[1]} alt={title} />
				</Link>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{price}</b>
						<span className="place-card__price-text">/&nbsp;night</span>
					</div>
					<Toggler active={isFavorite} toggle={handleToggleFavorite} />
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{ width: `${Math.round(rating) * 20}%` }} />
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<Link to={`/offer/${id}`}>{title}</Link>
				</h2>
				<p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
			</div>
		</article>
	)
}
