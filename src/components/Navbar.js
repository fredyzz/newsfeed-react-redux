import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<NavLink to="/" exact={true}>
						<img src={require('../images/icon_home.svg')} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/negocios">Negocios</NavLink>
				</li>
				<li>
					<NavLink to="/economia">Economía</NavLink>
				</li>
				<li>
					<NavLink to="/interes-general">Interés general</NavLink>
				</li>
				<li>
					<NavLink to="/deportes">Deportes</NavLink>
				</li>
				<li>
					<NavLink to="/tecnologia">Tecnología</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
