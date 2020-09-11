import React from 'react'
import './styles/error.css'
import { Link } from 'react-router-dom'

const Error = ({ message, link, linkName }) => {
	return (
		<div className="error">
			<img src={require('../images/icon_sorry.svg')} alt="Error ocurred" />
			<div className="error_data">
				<h2>{message}</h2>
				{link && <Link to={link}>Volver a {linkName}</Link>}
			</div>
		</div>
	)
}

export default Error
