import { Link } from 'react-router-dom'
import css from './not-found.module.css'

export default function NotFound() {
	return (
		<div className={css['error-page']}>
			<b>404</b>
			<span>Not Found</span>
			<Link to="/">перейти на главную</Link>
		</div>
	)
}
