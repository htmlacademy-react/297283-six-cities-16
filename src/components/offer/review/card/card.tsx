import { Review } from '../../../../types/review'

type ReviewCardProps = {
	review: Review
}

export default function ReviewCard({ review }: ReviewCardProps): JSX.Element {
	const { date, user, comment, rating } = review

	const dateFormatted: string = new Date(date).toLocaleString('en-EN', { year: 'numeric', month: 'long' })

	return (
		<li className="reviews__item">
			<div className="reviews__user user">
				<div className="reviews__avatar-wrapper user__avatar-wrapper">
					<img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt={`${user.name} avatar`} />
				</div>
				<span className="reviews__user-name">{user.name}</span>
			</div>
			<div className="reviews__info">
				<div className="reviews__rating rating">
					<div className="reviews__stars rating__stars">
						<span style={{ width: `${rating * 20}%` }} />
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<p className="reviews__text">{comment}</p>
				<time className="reviews__time" dateTime="2019-04-24">
					{dateFormatted}
				</time>
			</div>
		</li>
	)
}
