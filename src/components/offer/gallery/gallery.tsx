type PropsGallery = {
	images: string[]
}

export default function Gallery({ images }: PropsGallery): JSX.Element {
	return (
		<div className="offer__gallery-container container">
			<div className="offer__gallery">
				{images.map((url) => (
					<div className="offer__image-wrapper" key={url}>
						<img className="offer__image" src={url} alt="Photo studio" />
					</div>
				))}
			</div>
		</div>
	)
}
