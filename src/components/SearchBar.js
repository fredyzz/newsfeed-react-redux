import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNewsByKey } from '../actions'

const SearchBar = ({ searchMode, setSearchMode }) => {
	const dispatch = useDispatch()
	const isSearching = useSelector((state) => state.searchInProgress)
	const [searchKey, setSearchKey] = useState('')

	const disableSearchMode = () => {
		setSearchMode(!searchMode)
	}

	const handleInputChange = (e) => {
		setSearchKey(e.target.value)
	}

	const handleSearch = (e) => {
		e.preventDefault()
		if (searchKey) {
			clearSearch()
			dispatch(getNewsByKey(searchKey))
		}
	}

	const clearSearch = () => setSearchKey('')

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<input
				value={searchKey}
				type="text"
				placeholder="¿Que tema quieres buscar?"
				onChange={handleInputChange}
				onFocus={clearSearch}
			/>
			{!isSearching ? (
				<button tipe="submit">
					<img src={require('../images/icon_search.svg')} alt="search icon" />
				</button>
			) : (
				<img
					className="loading_image"
					src={require('../images/image_loading.gif')}
					alt="loading icon"
				/>
			)}

			<button onClick={disableSearchMode}>X</button>
		</form>
	)
}

export default SearchBar
