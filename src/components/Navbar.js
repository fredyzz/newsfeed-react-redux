import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/economia">Economia</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
