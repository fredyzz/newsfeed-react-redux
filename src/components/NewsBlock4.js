import React from 'react'

const NewsBlock4 = ({ newsList }) => {
	return (
		<div className="newsblock_4">
			{newsList.map((news) => {
				return (
					<div key={news.news_id}>
						<h4>{news.title}</h4>
						<img src={news.img_url} alt={news.title} />
						<a href={news.url}>{`Ver mas en ${news.source_name}`}</a>
					</div>
				)
			})}
		</div>
	)
}

export default NewsBlock4
