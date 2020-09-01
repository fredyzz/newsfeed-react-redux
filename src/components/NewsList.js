import React from 'react'

const NewsList = ({ newsList }) => {
	return (
		<div>
			<ul>
				{newsList.map((news) => (
					<li key={news.news_id}>{news.title}</li>
				))}
			</ul>
		</div>
	)
}

export default NewsList
