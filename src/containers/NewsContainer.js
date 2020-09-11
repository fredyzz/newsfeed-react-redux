import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Import packages
import moment from 'moment'
// Import actions
import { getNewsBy } from '../actions'

const TODAY = moment().format('YYYY-MM-DD')
const MAIN_NEWS_QUANTITY = 12
const NEWS_LIST_STEPS = 12

const NewsContainer = ({
	ChildComponent,
	mainPage = false,
	endpoint,
	...rest
}) => {
	// Getting data
	const dispatch = useDispatch()
	const isLoading = useSelector((state) => state.loadingNewsInProgress)
	const hasError = useSelector((state) => state.loadingError)
	const newsList = useSelector((state) => state.loadingNewsSuccess.news)
	const searchNewsList = useSelector((state) => state.searchNews)

	useEffect(() => {
		mainPage && dispatch(getNewsBy({ type: 'date', date: TODAY }))
		!mainPage && dispatch(getNewsBy({ type: 'category', category: endpoint }))
	}, [dispatch, mainPage, endpoint])

	// States
	const [visibleNews, setVisibleNews] = useState(MAIN_NEWS_QUANTITY)

	//News with pagination
	const mainNews = newsList.slice(0, MAIN_NEWS_QUANTITY)
	const moreNews = newsList.slice(
		MAIN_NEWS_QUANTITY,
		visibleNews + NEWS_LIST_STEPS
	)

	const showMoreNews = () => {
		setVisibleNews(visibleNews + NEWS_LIST_STEPS)
	}

	return (
		<ChildComponent
			{...rest}
			mainPage={mainPage}
			isLoading={isLoading}
			hasError={hasError}
			searchNewsList={searchNewsList}
			mainNews={mainNews}
			moreNews={moreNews}
			showMoreNews={showMoreNews}
		/>
	)
}

export default NewsContainer
