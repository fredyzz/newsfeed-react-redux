import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRepos } from '../actions'

const SearchBar = ({ searchMode, setSearchMode }) => {
	const dispatch = useDispatch()
	const isSearching = useSelector((state) => state.loadingInProgress)
	const [searchKey, setSearchKey] = useState('')

	const disableSearchMode = () => {
		setSearchMode(!searchMode)
	}

	const handleInputChange = (e) => {
		setSearchKey(e.target.value)
	}

	const handleSearch = () => {
		if (searchKey) {
			clearSearch()
			dispatch(getRepos(searchKey))
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
			{!isSearching ? (
				<button onClick={handleSearch}>
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
		</div>
	)
}

export default SearchBar
