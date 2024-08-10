import css from './loader.module.css'

export default function Loader(): JSX.Element {
	return (
		<div className={css['overlay']}>
			<div className={css['loader']}></div>
		</div>
	)
}
