export const loadingError = (bool) => ({
	type: 'LOADING_ERROR',
	hasErrored: bool
})

export const clearNews = () => ({
	type: 'CLEAR_NEWS'
})

export const loadingNewsInProgress = (bool) => ({
	type: 'LOADING_NEWS_IN_PROGRESS',
	isLoading: bool
})

export const loadingNewsSuccess = ({ news, date = '' }) => ({
	type: 'LOADING_NEWS_SUCCESS',
	date,
	news
})

export const searchNews = ({ news, date = '', key = '' }) => ({
	type: 'SEARCH_NEWS',
	date,
	key,
	news
})

export const clearSearch = () => ({
	type: 'CLEAR_SEARCH'
})

export const searchInProgress = (bool) => ({
	type: 'SEARCH_IN_PROGRESS',
	isLoading: bool
})

export const getNewsByDate = (date) => {
	return (dispatch) => {
		dispatch(clearSearch())
		dispatch(clearNews())

		dispatch(loadingError(false))

		dispatch(loadingNewsInProgress(true))

		fetch(`https://api.canillitapp.com/latest/${date}`)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText)
				}

				return response
			})
			.then((response) => response.json())
			.then((news) => dispatch(loadingNewsSuccess({ news, date })))
			.then(() => dispatch(loadingNewsInProgress(false)))
			.catch(() => dispatch(loadingError(true)))
	}
}

export const getNewsByKey = (key) => {
	return (dispatch) => {
		dispatch(clearSearch())

		dispatch(loadingError(false))

		dispatch(searchInProgress(true))

		fetch(`https://api.canillitapp.com/search/${key.replace(/\s/g, '-')}`)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText)
				}

				return response
			})
			.then((response) => response.json())
			.then((news) => dispatch(searchNews({ news, key })))
			.then(() => dispatch(searchInProgress(false)))
			.catch(() => dispatch(loadingError(true)))
	}
}
