import React from 'react'
import './styles/newslist.css'

const PLACEHOLDER_URL = require('../images/placeholder_news.svg')
const NewsList = ({ newsList, title }) => {
	return (
		<div className="newslist">
			{title && <h2>{title}</h2>}
			{newsList.map((news) => (
				<div key={news.news_id} className="newslist_item">
					<img
						src={news.img_url ? news.img_url : PLACEHOLDER_URL}
						alt={news.title}
					/>
					<div>
						<h4>{news.title}</h4>
						<a
							href={news.url}
							target="_blank"
						>{`Ver mas en ${news.source_name}`}</a>
					</div>
				</div>
			))}
		</div>
	)
}

export default NewsList
