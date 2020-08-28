import React, { useState } from 'react'

const SearchBar = ({ searchMode, setSearchMode }) => {
	const [searchKey, setSearchKey] = useState('')
	const [loading, setLoading] = useState(false)

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
			setLoading(true)
			setTimeout(() => {
				setLoading(false)
			}, 2000)
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
			{!loading ? (
				<button onClick={handleSearch}>
					<img src={require('../images/icon_search.svg')} alt="search icon" />
				</button>
			) : (
				<img
					className="loading_image"
					src={require('../images/image_loading.gif')}
					alt="loading image"
				/>
			)}

			<button onClick={disableSearchMode}>X</button>
		</div>
	)
}

export default SearchBar
