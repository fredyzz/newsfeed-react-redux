import { combineReducers } from 'redux'

const loadingError = (state = false, action) => {
	switch (action.type) {
		case 'LOADING_ERROR':
			return action.hasErrored
		default:
			return state
	}
}

const loadingNewsInProgress = (state = false, action) => {
	switch (action.type) {
		case 'LOADING_NEWS_IN_PROGRESS':
			return action.isLoading
		default:
			return state
	}
}

const loadingNewsSuccess = (state = { news: [], date: '' }, action) => {
	switch (action.type) {
		case 'LOADING_NEWS_SUCCESS':
			return { date: action.date, news: action.news }
		case 'CLEAR_NEWS':
			return { news: [], date: '' }
		default:
			return state
	}
}

const searchNews = (state = { news: [], key: '', date: '' }, action) => {
	switch (action.type) {
		case 'SEARCH_NEWS':
			return { key: action.key, date: action.date, news: action.news }
		case 'CLEAR_SEARCH':
			return { news: [], key: '', date: '' }
		default:
			return state
	}
}

const searchInProgress = (state = false, action) => {
	switch (action.type) {
		case 'SEARCH_IN_PROGRESS':
			return action.isLoading
		default:
			return state
	}
}

export default combineReducers({
	loadingNewsSuccess,
	loadingError,
	loadingNewsInProgress,
	searchNews,
	searchInProgress
	// loadingInProgress,
	// repos,
})
