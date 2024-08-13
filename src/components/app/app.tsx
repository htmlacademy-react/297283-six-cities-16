import { RouterProvider } from 'react-router-dom'
import router from '../../router'
import { useAppDispatch } from '../../hooks/hooks'
import { useEffect } from 'react'
import { checkAuth } from '../../store/thunks/auth'

export default function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(checkAuth())
	}, [dispatch])

	return <RouterProvider router={router} />
}
