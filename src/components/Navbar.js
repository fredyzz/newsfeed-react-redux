import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'
import SearchButton from './SearchButton'
import SearchBar from './SearchBar'
// Import constants
import { ROUTES_INFORMATION } from '../utils/variables'

const Navbar = () => {
	const [searchMode, setSearchMode] = useState(false)
	return (
		<nav className="navbar">
			<ul>
				<li key="home">
					<NavLink to="/" exact={true}>
						<img src={require('../images/icon_home.svg')} alt="Home icon" />
					</NavLink>
				</li>
				{ROUTES_INFORMATION.map((route, key) => {
					if (route.path !== '/') {
						return (
							<li key={key}>
								<NavLink to={route.path}>{route.title}</NavLink>
							</li>
						)
					} else {
						return null
					}
				})}
				<li>
					<SearchButton
						className={'search_button'}
						iconSrc={require('../images/icon_search.svg')}
						searchMode={searchMode}
						setSearchMode={setSearchMode}
					/>
				</li>
			</ul>
			{searchMode && (
				<SearchBar searchMode={searchMode} setSearchMode={setSearchMode} />
			)}
		</nav>
	)
}

export default Navbar
