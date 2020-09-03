import React from 'react'
import './styles/newsblocks.css'

const PLACEHOLDER_URL = require('../images/placeholder_news.svg')
const NewsBlocks = ({ newsList, title }) => {
	return (
		<div className="newsblocks">
			{title && <h2>{title}</h2>}
			{newsList.map((news) => {
				return (
					<div key={news.news_id} className="newsblock">
						<img
							src={news.img_url ? news.img_url : PLACEHOLDER_URL}
							alt={news.title}
						/>
						<h4>{news.title}</h4>
						<a
							href={news.url}
							target="_blank"
							rel="noopener noreferrer"
						>{`Ver mas en ${news.source_name}`}</a>
					</div>
				)
			})}
		</div>
	)
}

export default NewsBlocks
