import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNewsByKey, clearSearchResult } from '../actions'

const SearchBar = ({ searchMode, setSearchMode }) => {
	const dispatch = useDispatch()
	const isSearching = useSelector((state) => state.searchInProgress)
	const searchResult = useSelector((state) => state.searchNews.key)
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

	const cleanResults = () => {
		dispatch(clearSearchResult())
	}

	return (
		<form
			className={searchMode ? 'searchbar active' : 'searchbar disabled'}
			onSubmit={handleSearch}
		>
			{searchResult ? (
				<div className="search_result">
					<input
						value={searchResult}
						type="text"
						onClick={cleanResults}
						onChange={cleanResults}
					/>
					<img
						src={require('../images/icon_cross.svg')}
						alt="icon cross"
						onClick={cleanResults}
					/>
				</div>
			) : (
				<input
					value={searchKey}
					type="text"
					placeholder="¿Que tema quieres buscar?"
					onChange={handleInputChange}
					onFocus={clearSearch}
				/>
			)}

			{!isSearching ? (
				<button tipe="submit" disabled={searchResult ? true : false}>
					<img src={require('../images/icon_search.svg')} alt="search icon" />
				</button>
			) : (
				<img
					className="loading_image"
					src={require('../images/image_loading.gif')}
					alt="loading icon"
				/>
			)}

			<img
				onClick={disableSearchMode}
				src={require('../images/icon_up.svg')}
				alt="close icon"
			/>
		</form>
	)
}

export default SearchBar
