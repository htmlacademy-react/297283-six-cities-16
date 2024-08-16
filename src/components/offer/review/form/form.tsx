import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks'
import { ReviewForm as ReviewFormType } from '../../../../types/review'
import { sendReview } from '../../../../store/thunks/reviews'
import { useParams } from 'react-router-dom'
import { reviewsSlice } from '../../../../store/slices/reviews'
import { RequestStatus } from '../../../../const'

const RATING_TITLES = ['terribly', 'badly', 'not bad', 'good', 'perfect'] as const

export default function ReviewForm(): JSX.Element {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const status = useAppSelector(reviewsSlice.selectors.status)
	const form = useRef<HTMLFormElement>(null)
	const [reviewForm, setReviewForm] = useState<ReviewFormType>({
		rating: 0,
		comment: ''
	})

	const isDisabledForm =
		!reviewForm.rating || reviewForm.comment.length < 50 || reviewForm.comment.length > 300 || status === RequestStatus.Loading

	useEffect(() => {
		if (status === RequestStatus.Success) {
			setReviewForm({ rating: 0, comment: '' })
			if (form.current) {
				form.current.reset()
			}
		}
	}, [status])

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(
			sendReview({
				body: reviewForm,
				offerId: id!
			})
		)
	}

	return (
		<form ref={form} className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
			<label className="reviews__label form__label" htmlFor="review">
				Your review
			</label>
			<div className="reviews__rating-form form__rating">
				{RATING_TITLES.map((title, i) => (
					<React.Fragment key={title}>
						<input
							className="form__rating-input visually-hidden"
							onChange={(e) => setReviewForm({ ...reviewForm, rating: +e.target.value })}
							name="rating"
							defaultValue={i + 1}
							id={`${i + 1}-stars`}
							type="radio"
							disabled={status === RequestStatus.Loading}
						/>
						<label htmlFor={`${i + 1}-stars`} className="reviews__rating-label form__rating-label" title={title}>
							<svg className="form__star-image" width={37} height={33}>
								<use xlinkHref="#icon-star" />
							</svg>
						</label>
					</React.Fragment>
				)).reverse()}
			</div>
			<textarea
				value={reviewForm.comment}
				onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
				className="reviews__textarea form__textarea"
				id="review"
				name="review"
				placeholder="Tell how was your stay, what you like and what can be improved"
				disabled={status === RequestStatus.Loading}
			/>
			<div className="reviews__button-wrapper">
				<p className="reviews__help">
					To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least{' '}
					<b className="reviews__text-amount">50 characters</b>.
				</p>
				<button className="reviews__submit form__submit button" type="submit" disabled={isDisabledForm}>
					Submit
				</button>
			</div>
		</form>
	)
}
