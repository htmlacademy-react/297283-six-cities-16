import classNames from 'classnames'
import { OfferCard as OfferCardType } from '../../types/offer'
import { Link } from 'react-router-dom'

type OfferCardProps = {
	offer: OfferCardType
	extraClassName?: string
	imageSize?: [number, number]
	setActiveOfferId?: () => void
}

export default function OfferCard({
	offer,
	extraClassName = 'cities',
	imageSize = [260, 200],
	setActiveOfferId
}: OfferCardProps): JSX.Element {
	const { id, title, type, price, isFavorite, isPremium, rating, previewImage } = offer

	return (
		<article className={`${extraClassName}__card place-card`} onMouseEnter={setActiveOfferId}>
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
