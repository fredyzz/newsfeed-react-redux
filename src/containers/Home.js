import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getNewsByDate } from '../actions'
import NewsBlocks from '../components/NewsBlocks'
import NewsList from '../components/NewsList'
import Loader from '../components/Loader'

const Home = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector((state) => state.loadingNewsInProgress)
	const newsList = useSelector((state) => state.news)

	useEffect(() => {
		dispatch(getNewsByDate('2020-04-29'))
	}, [dispatch])
	return (
		<div className="container">
			{isLoading ? (
				<Loader />
			) : (
				<>
					<NewsBlocks
						newsList={newsList.slice(0, 12)}
						title="ultimas noticias"
					/>
					<NewsList newsList={newsList.slice(12, 24)} title="Mas noticias" />
				</>
			)}
		</div>
	)
}

export default Home
