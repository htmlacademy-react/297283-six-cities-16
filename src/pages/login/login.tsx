import Header from '../../components/header/header'
import { FormEvent, MouseEvent, useRef } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { login } from '../../store/thunks/auth'
import { CityName } from '../../types/location'
import { setCity } from '../../store/slices/offers'
import { LOCATIONS } from '../../const'
import { useNavigate } from 'react-router-dom'

const PASSWORD_REG_EXP = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/

export default function Login(): JSX.Element {
	const dispatch = useAppDispatch()
	const formRef = useRef<HTMLFormElement>(null)
	const navigate = useNavigate()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!formRef.current) {
			return
		}
		const formData = new FormData(formRef.current)
		const email = formData.get('email') as string
		const password = formData.get('password') as string
		const isValidPassword = PASSWORD_REG_EXP.test(password)
		if (isValidPassword) {
			dispatch(login({ email, password }))
		}
	}

	const randomLocation = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]

	const handleClick = (e: MouseEvent, cityName: CityName) => {
		e.preventDefault()
		dispatch(setCity(cityName))
		navigate('/')
	}

	return (
		<div className="page page--gray page--login">
			<Header showNav={false} />
			<main className="page__main page__main--login">
				<div className="page__login-container container">
					<section className="login">
						<h1 className="login__title">Sign in</h1>
						<form ref={formRef} onSubmit={handleSubmit} className="login__form form" action="#" method="post">
							<div className="login__input-wrapper form__input-wrapper">
								<label className="visually-hidden">E-mail</label>
								<input className="login__input form__input" type="email" name="email" placeholder="Email" required />
							</div>
							<div className="login__input-wrapper form__input-wrapper">
								<label className="visually-hidden">Password</label>
								<input className="login__input form__input" type="password" name="password" placeholder="Password" required />
							</div>
							<button className="login__submit form__submit button" type="submit">
								Sign in
							</button>
						</form>
					</section>
					<section className="locations locations--login locations--current">
						<div className="locations__item">
							<a href="#" onClick={(e) => handleClick(e, randomLocation.name)} className="locations__item-link">
								<span>{randomLocation.name}</span>
							</a>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}
