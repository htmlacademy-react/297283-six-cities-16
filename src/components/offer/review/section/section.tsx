import { AuthStatus } from '../../../../const'
import { Review } from '../../../../types/review'
import ReviewCard from '../card/card'
import ReviewForm from '../form/form'

type SectionProps = {
	isLoggedIn: AuthStatus
	reviews: Review[]
}

export default function Section({ isLoggedIn, reviews }: SectionProps): JSX.Element {
	return (
		<section className="offer__reviews reviews">
			<h2 className="reviews__title">
				Reviews · <span className="reviews__amount">{reviews.length}</span>
			</h2>
			<ul className="reviews__list">
				{reviews.slice(0, 10).map((review) => (
					<ReviewCard review={review} key={review.id} />
				))}
			</ul>
			{isLoggedIn === AuthStatus.Auth && <ReviewForm />}
		</section>
	)
}
