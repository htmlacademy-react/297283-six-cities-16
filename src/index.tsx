import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { Provider } from 'react-redux'
import store from './store/store'
import { checkAuth } from './store/thunks/auth'
import { Toaster } from 'sonner'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

store.dispatch(checkAuth())

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<Toaster position="top-right" richColors />
		</Provider>
	</React.StrictMode>
)
