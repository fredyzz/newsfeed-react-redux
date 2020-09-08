import React from 'react'
import './styles/moreNewsButton.css'

const MoreNewsButton = ({ visibleNews, setVisibleNews, steps }) => {
	const handleClick = () => {
		setVisibleNews(visibleNews + steps)
	}

	return (
		<div className="morenewsbutton">
			<div className="box-1">
				<div className="btn btn-one" onClick={handleClick}>
					<span>Cargar mas</span>
				</div>
			</div>
		</div>
	)
}

export default MoreNewsButton
