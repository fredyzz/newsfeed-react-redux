import React, { useState } from 'react'

const SearchBar = ({ searchMode, setSearchMode }) => {
	const [searchKey, setSearchKey] = useState('')

	const disableSearchMode = () => {
		setSearchMode(!searchMode)
	}

	const handleInputChange = (e) => {
		setSearchKey(e.target.value)
	}

	const handleSearch = () => {
		if (searchKey) {
			console.log(searchKey)
			clearSearch()
		}
	}

	const clearSearch = () => setSearchKey('')

	return (
		<div className="searchbar">
			<input
				value={searchKey}
				type="text"
				placeholder="¿Que tema quieres buscar?"
				onChange={handleInputChange}
				onFocus={clearSearch}
			/>
			<button onClick={handleSearch}>
				<img src={require('../images/icon_search.svg')} alt="search icon" />
			</button>
			<button onClick={disableSearchMode}>X</button>
		</div>
	)
}

export default SearchBar
