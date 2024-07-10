import Main from '../../pages/main/main'
import Favorites from '../../pages/favorites/favorites'
import Login from '../../pages/login/login'
import Offer from '../../pages/offer/offer'

export type AppProps = {
	offersNumber: number
}

export default function App({ offersNumber }: AppProps): JSX.Element {
	return (
		<>
			{true && <Main offersNumber={offersNumber} />}
			{false && <Favorites />}
			{false && <Login />}
			{false && <Offer />}
		</>
	)
}
