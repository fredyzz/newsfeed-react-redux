import React from 'react'
import Loader from '../Loader'
import NewsBlocks from '../NewsBlocks'
import NewsList from '../NewsList'
import MoreNewsButton from '../MoreNewsButton'

const Home = ({
	isLoading,
	searchNewsList,
	newsList,
	mainNews,
	moreNews,
	showMoreNews,
	mainPage,
	title
}) => (
	<div className="container">
		{isLoading ? (
			<Loader />
		) : searchNewsList.key ? (
			<NewsList
				newsList={searchNewsList.news}
				title={`Busqueda: ${searchNewsList.key}`}
			/>
		) : (
			<>
				{mainPage && (
					<NewsBlocks newsList={mainNews} title="Últimas noticias" />
				)}
				<NewsList
					newsList={moreNews}
					title={mainPage ? 'Mas noticias' : `Noticias sobre ${title}`}
				/>
				<MoreNewsButton showMoreNews={showMoreNews} />
			</>
		)}
	</div>
)

export default Home
