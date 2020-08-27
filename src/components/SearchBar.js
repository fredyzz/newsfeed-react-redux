import React from 'react'

const SearchBar = ({ searchMode, setSearchMode }) => {
	const handleClick = () => {
		setSearchMode(!searchMode)
	}
	return (
		<div className="searchbar">
			<input type="text" placeholder="Ingrese lo que desea buscar" />
			<button onClick={handleClick}>X</button>
		</div>
	)
}

export default SearchBar
