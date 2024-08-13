import classNames from 'classnames'

type TogglerProps = {
	extraClassName?: string
	active: boolean
	size?: [number, number]
	toggle: () => void
}

export default function Toggler({ extraClassName = 'place-card', size = [18, 19], active, toggle }: TogglerProps): JSX.Element {
	return (
		<button
			onClick={toggle}
			className={classNames(`${extraClassName}__bookmark-button button`, { [`${extraClassName}__bookmark-button--active`]: active })}
			type="button"
		>
			<svg className={`${extraClassName}__bookmark-icon`} width={size[0]} height={size[1]}>
				<use xlinkHref="#icon-bookmark" />
			</svg>
			<span className="visually-hidden">To bookmarks</span>
		</button>
	)
}
