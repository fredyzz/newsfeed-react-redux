import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'
import SearchButton from './SearchButton'
import SearchBar from './SearchBar'

const Navbar = () => {
	const [searchMode, setSearchMode] = useState(false)
	return (
		<nav className="navbar">
			<ul>
				<li>
					<NavLink to="/" exact={true}>
						<img src={require('../images/icon_home.svg')} alt="Home icon" />
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
