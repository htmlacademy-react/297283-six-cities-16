import { MouseEvent } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { authSlice } from '../../store/slices/auth'
import { AuthStatus } from '../../const'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { logout } from '../../store/thunks/auth'

type HeaderProps = {
	showNav?: boolean
}

export default function Header({ showNav = true }: HeaderProps): JSX.Element {
	const dispatch = useAppDispatch()
	const authStatus = useAppSelector(authSlice.selectors.authStatus)
	const user = useAppSelector(authSlice.selectors.user)
	const location = useLocation()
	const isMainPage = location.pathname === '/'

	const handleSignOut = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		dispatch(logout())
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
						<Link
							to="/"
							className={classNames('header__logo-link', { 'header__logo-link--active': isMainPage })}
							style={{ pointerEvents: isMainPage ? 'none' : undefined }}
						>
							<img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
						</Link>
					</div>
					{showNav && (
						<nav className="header__nav">
							<ul className="header__nav-list">
								{authStatus === AuthStatus.Auth ? (
									<>
										<li className="header__nav-item user">
											<Link to="/favorites" className="header__nav-link header__nav-link--profile">
												<div className="header__avatar-wrapper user__avatar-wrapper"></div>
												<span className="header__user-name user__name">{user?.email}</span>
												<span className="header__favorite-count">3</span>
											</Link>
										</li>
										<li className="header__nav-item">
											<a className="header__nav-link" href="#" onClick={handleSignOut}>
												<span className="header__signout">Sign out</span>
											</a>
										</li>
									</>
								) : (
									<li className="header__nav-item user">
										<Link to="/login" className="header__nav-link header__nav-link--profile">
											<div className="header__avatar-wrapper user__avatar-wrapper"></div>
											<span className="header__login">Sign in</span>
										</Link>
									</li>
								)}
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	)
}
