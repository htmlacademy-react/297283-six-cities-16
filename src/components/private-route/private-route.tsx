import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
	hasAccess: boolean
	children: JSX.Element
}

export default function PrivateRoute({ hasAccess, children }: PrivateRouteProps): JSX.Element {
	return hasAccess ? children : <Navigate to={'/login'} />
}
