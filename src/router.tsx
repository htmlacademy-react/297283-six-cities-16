import { createBrowserRouter } from 'react-router-dom'
import Main from './pages/main/main'
import Favorites from './pages/favorites/favorites'
import Login from './pages/login/login'
import Offer from './pages/offer/offer'
import NotFound from './pages/not-found/not-found'
import ProtectedRoute from './components/protected-route/protected-route'

const router = createBrowserRouter([
	{
		children: [
			{
				element: <Main />,
				index: true
			},
			{
				path: 'login',
				element: (
					<ProtectedRoute>
						<Login />
					</ProtectedRoute>
				)
			},
			{
				path: 'favorites',
				element: (
					<ProtectedRoute auth>
						<Favorites />
					</ProtectedRoute>
				)
			},
			{
				path: 'offer/:id',
				element: <Offer />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
])

export default router
