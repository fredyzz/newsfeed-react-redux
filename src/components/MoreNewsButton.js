import React from 'react'
import './styles/moreNewsButton.css'

const MoreNewsButton = ({ showMoreNews }) => {
	const handleClick = () => {
		showMoreNews()
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
