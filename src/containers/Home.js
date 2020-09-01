import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getNewsByDate } from '../actions'
import NewsBlock4 from '../components/NewsBlock4'
import NewsList from '../components/NewsList'

const Home = () => {
	const dispatch = useDispatch()
	const newsList = useSelector((state) => state.news)

	useEffect(() => {
		dispatch(getNewsByDate('2020-04-29'))
	}, [dispatch])
	return (
		<div>
			<h1>Home</h1>
			{newsList && <NewsBlock4 newsList={newsList.slice(0, 4)} />}

			<h2>Mas Noticias</h2>
			<NewsList newsList={newsList.slice(4, 13)} />
		</div>
	)
}

export default Home
