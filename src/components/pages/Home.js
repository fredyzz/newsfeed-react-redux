import React from 'react'
import Loader from '../Loader'
import NewsBlocks from '../NewsBlocks'
import NewsList from '../NewsList'
import MoreNewsButton from '../MoreNewsButton'

const Home = ({
	isLoading,
	searchNewsList,
	newsList,
	visibleNews,
	setVisibleNews,
	mainNewsQuantity,
	newsListSteps
}) => (
	<div className="container">
		{isLoading ? (
			<Loader />
		) : searchNewsList.key ? (
			<NewsList
				newsList={searchNewsList.news.slice(0, 50)}
				title={`Busqueda: ${searchNewsList.key}`}
			/>
		) : (
			<>
				<NewsBlocks
					newsList={newsList.slice(0, mainNewsQuantity)}
					title="ultimas noticias"
				/>
				<NewsList
					newsList={newsList.slice(
						mainNewsQuantity,
						visibleNews + newsListSteps
					)}
					title="Mas noticias"
				/>
				<MoreNewsButton
					visibleNews={visibleNews}
					steps={newsListSteps}
					setVisibleNews={setVisibleNews}
				/>
			</>
		)}
	</div>
)

export default Home
