import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { getRepos, clearRepos } from '../actions'

const SearchBar = ({ onGet, searchMode, setSearchMode, isSearching }) => {
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
			// setLoading(true)
			// setTimeout(() => {
			// 	setLoading(false)
			// }, 2000)
			onGet(searchKey)
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

const mapStateToProps = (state, ownProps) => ({
	searchMode: ownProps.searchMode,
	setSearchMode: ownProps.setSearchMode,
	isSearching: state.loadingInProgress
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onGet: (input) => dispatch(getRepos(input)),
	onClear: () => dispatch(clearRepos())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
