import classNames from 'classnames'
import { SORTING_OPTIONS_MAP } from '../../../const'
import type { SortingOptions } from '../../../types/sorting'
import { useState } from 'react'

type SortingProps = {
	active: SortingOptions
	setSorting: (option: SortingOptions) => void
}

export default function Sorting({ active, setSorting }: SortingProps): JSX.Element {
	const [showList, setShowList] = useState<boolean>(false)

	const handleClick = (key: SortingOptions) => {
		setSorting(key)
		setShowList(false)
	}

	return (
		<form className="places__sorting" action="#" method="get">
			<span className="places__sorting-caption">Sort by </span>
			<span className="places__sorting-type" tabIndex={0} onClick={() => setShowList(!showList)}>
				{SORTING_OPTIONS_MAP[active]}
				<svg className="places__sorting-arrow" width={7} height={4}>
					<use xlinkHref="#icon-arrow-select" />
				</svg>
			</span>
			{showList && (
				<ul className="places__options places__options--custom places__options--opened">
					{Object.entries(SORTING_OPTIONS_MAP).map(([key, value]) => (
						<li
							className={classNames('places__option', { 'places__option--active': key === active })}
							tabIndex={0}
							key={key}
							onClick={() => handleClick(key as SortingOptions)}
						>
							{value}
						</li>
					))}
				</ul>
			)}
		</form>
	)
}
