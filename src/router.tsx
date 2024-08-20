import { createBrowserRouter } from 'react-router-dom'
import Main from './pages/main/main'
import Favorites from './pages/favorites/favorites'
import Login from './pages/login/login'
import Offer from './pages/offer/offer'
import NotFound from './pages/not-found/not-found'
import ProtectedRoute from './components/protected-route/protected-route'
import { RoutePath } from './const'

const router = createBrowserRouter([
	{
		children: [
			{
				element: <Main />,
				index: true
			},
			{
				path: RoutePath.Login,
				element: (
					<ProtectedRoute>
						<Login />
					</ProtectedRoute>
				)
			},
			{
				path: RoutePath.Favorite,
				element: (
					<ProtectedRoute auth>
						<Favorites />
					</ProtectedRoute>
				)
			},
			{
				path: RoutePath.Offer,
				element: <Offer />
			},
			{
				path: RoutePath.Error,
				element: <NotFound />
			}
		]
	}
])

export default router
