import classNames from 'classnames'
import { OfferCard } from '../../../types/offer'
import { Link } from 'react-router-dom'

type OfferCardProps = {
	offer: OfferCard
}

export default function Card({ offer }: OfferCardProps): JSX.Element {
	const { id, title, type, price, isFavorite, isPremium, rating, previewImage } = offer

	return (
		<article className="favorites__card place-card">
			{isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>
			)}
			<div className="favorites__image-wrapper place-card__image-wrapper">
				<Link to={`/offer/${id}`}>
					<img className="place-card__image" src={previewImage} width={150} height={110} alt={title} />
				</Link>
			</div>
			<div className="favorites__card-info place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{price}</b>
						<span className="place-card__price-text">/&nbsp;night</span>
					</div>
					<button
						className={classNames('place-card__bookmark-button button', { 'place-card__bookmark-button--active': isFavorite })}
						type="button"
					>
						<svg className="place-card__bookmark-icon" width={18} height={19}>
							<use xlinkHref="#icon-bookmark" />
						</svg>
						<span className="visually-hidden">To bookmarks</span>
					</button>
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{ width: `${rating * 20}%` }} />
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
