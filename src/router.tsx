import { createBrowserRouter } from 'react-router-dom'
import Main from './pages/main/main'
import Favorites from './pages/favorites/favorites'
import Login from './pages/login/login'
import Offer from './pages/offer/offer'
import NotFound from './pages/not-found/not-found'
import PrivateRoute from './components/private-route/private-route'

const router = createBrowserRouter([
	{
		children: [
			{
				element: <Main />,
				index: true
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'favorites',
				element: (
					<PrivateRoute hasAccess={false}>
						<Favorites />
					</PrivateRoute>
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
