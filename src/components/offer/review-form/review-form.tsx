import React, { useState } from 'react'

type ReviewForm = {
	rating: number
	comment: string
}

export default function ReviewForm(): JSX.Element {
	const [reviewForm, setReviewForm] = useState<ReviewForm>({
		rating: 0,
		comment: ''
	})

	const ratingTitles = ['terribly', 'badly', 'not bad', 'good', 'perfect'] as const

	const isDisabledForm = () => !reviewForm.rating || reviewForm.comment.length < 50

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
			<label className="reviews__label form__label" htmlFor="review">
				Your review
			</label>
			<div className="reviews__rating-form form__rating">
				{ratingTitles
					.map((title, i) => (
						<React.Fragment key={title}>
							<input
								className="form__rating-input visually-hidden"
								onChange={(e) => setReviewForm({ ...reviewForm, rating: +e.target.value })}
								name="rating"
								defaultValue={i + 1}
								id={`${i + 1}-stars`}
								type="radio"
							/>
							<label htmlFor={`${i + 1}-stars`} className="reviews__rating-label form__rating-label" title={title}>
								<svg className="form__star-image" width={37} height={33}>
									<use xlinkHref="#icon-star" />
								</svg>
							</label>
						</React.Fragment>
					))
					.reverse()}
			</div>
			<textarea
				value={reviewForm.comment}
				onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
				className="reviews__textarea form__textarea"
				id="review"
				name="review"
				placeholder="Tell how was your stay, what you like and what can be improved"
			/>
			<div className="reviews__button-wrapper">
				<p className="reviews__help">
					To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least{' '}
					<b className="reviews__text-amount">50 characters</b>.
				</p>
				<button className="reviews__submit form__submit button" type="submit" disabled={isDisabledForm()}>
					Submit
				</button>
			</div>
		</form>
	)
}
