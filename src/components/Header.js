import React from 'react'
import './styles/header.css'
import { Link } from 'react-router-dom'

const Header = ({ title }) => {
	return (
		<div className="header">
			<Link to="/">
				<img src={require('../images/logo128.png')} alt="Logo" />
			</Link>

			<h1 className="logo">{title}</h1>
		</div>
	)
}

export default Header
