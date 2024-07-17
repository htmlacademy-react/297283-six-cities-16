type MapProps = {
	activeOfferId: null | string
}

export default function Map({ activeOfferId }: MapProps): JSX.Element {
	return <section className="cities__map map">{activeOfferId}</section>
}
