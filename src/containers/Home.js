import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getNewsByDate } from '../actions'

const Home = () => {
	const dispatch = useDispatch()
	const newsList = useSelector((state) => state.news)

	useEffect(() => {
		dispatch(getNewsByDate('2020-04-29'))
	}, [dispatch])
	return (
		<div>
			<h1>Home</h1>
			{newsList.map((news, i) => (
				<div>
					<p>{news.title}</p>
				</div>
			))}
		</div>
	)
}

export default Home
