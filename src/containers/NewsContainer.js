import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Import packages
import moment from 'moment'
// Import actions
import { getNewsByDate } from '../actions'

const TODAY = moment().format('YYYY-MM-DD')
const MAIN_NEWS_QUANTITY = 12
const NEWS_LIST_STEPS = 12

const NewsContainer = ({ ChildComponent, mainPage = false, ...rest }) => {
	// Getting data
	const dispatch = useDispatch()
	const isLoading = useSelector((state) => state.loadingNewsInProgress)
	const newsList = useSelector((state) => state.loadingNewsSuccess.news)
	const searchNewsList = useSelector((state) => state.searchNews)

	useEffect(() => {
		mainPage && dispatch(getNewsByDate(TODAY))
	}, [dispatch, mainPage])

	// States
	const [visibleNews, setVisibleNews] = useState(MAIN_NEWS_QUANTITY)

	//News with pagination to
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
			newsList={newsList}
			searchNewsList={searchNewsList}
			mainNews={mainNews}
			moreNews={moreNews}
			showMoreNews={showMoreNews}
		/>
	)
}

export default NewsContainer
