import React from 'react'
import Loader from '../Loader'
import NewsBlocks from '../NewsBlocks'
import NewsList from '../NewsList'
import MoreNewsButton from '../MoreNewsButton'
import Error from '../Error'

const NewsPage = ({
	isLoading,
	hasError,
	searchNewsList,
	mainNews,
	moreNews,
	showMoreNews,
	mainPage,
	title
}) => (
	<div className="container">
		{hasError ? (
			<Error message="Ocurrió un error, intente nuevamente mas tarde por favor" />
		) : isLoading ? (
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

export default NewsPage
