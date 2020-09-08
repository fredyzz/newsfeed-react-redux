import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getNewsByDate } from '../actions'

import Loader from '../components/Loader'
import moment from 'moment'

const TODAY = moment().format('YYYY-MM-DD')
const MAIN_NEWS_QUANTITY = 12
const NEWS_LIST_STEPS = 12

const NewsContainer = ({ ChildComponent }) => {
	const dispatch = useDispatch()
	const isLoading = useSelector((state) => state.loadingNewsInProgress)
	const newsList = useSelector((state) => state.loadingNewsSuccess.news)
	const searchNewsList = useSelector((state) => state.searchNews)
	const [visibleNews, setVisibleNews] = useState(MAIN_NEWS_QUANTITY)

	useEffect(() => {
		dispatch(getNewsByDate(TODAY))
	}, [dispatch])
	return (
		<ChildComponent
			isLoading={isLoading}
			newsList={newsList}
			searchNewsList={searchNewsList}
			visibleNews={visibleNews}
			setVisibleNews={setVisibleNews}
			mainNewsQuantity={MAIN_NEWS_QUANTITY}
			newsListSteps={NEWS_LIST_STEPS}
		/>
	)
}

export default NewsContainer
