import { PlaceCard as PlaceCardType } from '../../pages/main/main'

type PlacesProps = {
	place: PlaceCardType
}

export default function PlaceCard({ place }: PlacesProps): JSX.Element {
	return (
		<article className="cities__card place-card">
			{place.isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>
			)}
			<div className="cities__image-wrapper place-card__image-wrapper">
				<a href={`/offer/${place.id}`}>
					<img className="place-card__image" src={place.previewImage} width={260} height={200} alt={place.title} />
				</a>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{place.price}</b>
						<span className="place-card__price-text">/&nbsp;night</span>
					</div>
					<button
						className={`place-card__bookmark-button button ${place.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
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
						<span style={{ width: `${place.rating * 20}%` }} />
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<a href={`/offer/${place.id}`}>{place.title}</a>
				</h2>
				<p className="place-card__type">{place.type[0].toUpperCase() + place.type.slice(1)}</p>
			</div>
		</article>
	)
}
