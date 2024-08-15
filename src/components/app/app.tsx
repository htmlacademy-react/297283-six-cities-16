import { RouterProvider } from 'react-router-dom'
import router from '../../router'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useEffect } from 'react'
import { authSlice } from '../../store/slices/auth'
import { AuthStatus } from '../../const'
import { fetchFavorite } from '../../store/thunks/favorite'

export default function App() {
	const dispatch = useAppDispatch()
	const authStatus = useAppSelector(authSlice.selectors.authStatus)

	useEffect(() => {
		if (authStatus === AuthStatus.Auth) {
			dispatch(fetchFavorite())
		}
	}, [authStatus, dispatch])

	return <RouterProvider router={router} />
}
