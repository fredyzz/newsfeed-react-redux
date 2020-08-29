export const loadingError = (bool) => ({
	type: 'LOADING_ERROR',
	hasErrored: bool
})

// export const loadingInProgress = (bool) => ({
// 	type: 'LOADING_IN_PROGRESS',
// 	isLoading: bool
// })

// export const loadingSuccess = (repos) => ({
// 	type: 'LOADING_SUCCESS',
// 	repos
// })

// export const clearRepos = () => ({
// 	type: 'CLEAR_REPOS'
// })

// export const getRepos = (username) => {
// 	return (dispatch) => {
// 		dispatch(clearRepos())

// 		dispatch(loadingError(false))

// 		dispatch(loadingInProgress(true))

// 		fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
// 			.then((response) => {
// 				if (!response.ok) {
// 					throw Error(response.statusText)
// 				}

// 				dispatch(loadingInProgress(false))

// 				return response
// 			})
// 			.then((response) => response.json())
// 			.then((repos) => dispatch(loadingSuccess(repos)))
// 			.catch(() => dispatch(loadingError(true)))
// 	}
// }

export const clearNews = () => ({
	type: 'CLEAR_NEWS'
})

export const loadingNewsInProgress = (bool) => ({
	type: 'LOADING_NEWS_IN_PROGRESS',
	isLoading: bool
})

export const loadingNewsSuccess = (news) => ({
	type: 'LOADING_NEWS_SUCCESS',
	news
})

export const getNewsByDate = (date) => {
	return (dispatch) => {
		dispatch(clearNews())

		dispatch(loadingError(false))

		dispatch(loadingNewsInProgress(true))

		fetch(`https://api.canillitapp.com/latest/${date}`)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText)
				}

				dispatch(loadingNewsInProgress(false))

				return response
			})
			.then((response) => response.json())
			.then((news) => dispatch(loadingNewsSuccess(news)))
			.catch(() => dispatch(loadingError(true)))
	}
}

export const getNewsByKey = (key) => {
	return (dispatch) => {
		dispatch(clearNews())

		dispatch(loadingError(false))

		dispatch(loadingNewsInProgress(true))

		fetch(`https://api.canillitapp.com/search/${key}`)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText)
				}

				dispatch(loadingNewsInProgress(false))

				return response
			})
			.then((response) => response.json())
			.then((news) => dispatch(loadingNewsSuccess(news)))
			.catch(() => dispatch(loadingError(true)))
	}
}
