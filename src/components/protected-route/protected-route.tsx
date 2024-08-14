import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { authSlice } from '../../store/slices/auth'
import { AuthStatus } from '../../const'
import Loader from '../loader/loader'

type ProtectedRouteProps = {
	auth?: boolean
	children: JSX.Element
}

export default function ProtectedRoute({ auth, children }: ProtectedRouteProps): JSX.Element {
	const authStatus = useAppSelector(authSlice.selectors.authStatus)

	if (authStatus === AuthStatus.Unknown) {
		return <Loader />
	}

	if (auth) {
		if (authStatus === AuthStatus.Auth) {
			return children
		} else {
			return <Navigate to={'/login'} />
		}
	} else {
		if (authStatus === AuthStatus.Auth) {
			return <Navigate to={'/'} />
		} else {
			return children
		}
	}
}
