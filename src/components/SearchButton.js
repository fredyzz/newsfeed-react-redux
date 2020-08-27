import React from 'react'

const SearchButton = ({ className, iconSrc, searchMode, setSearchMode }) => {
	const handleClick = () => {
		setSearchMode(!searchMode)
	}

	return (
		<button
			className={searchMode ? className + ' active' : className}
			onClick={handleClick}
		>
			<img src={iconSrc} alt="search icon" />
		</button>
	)
}

export default SearchButton
