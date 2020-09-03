import React from 'react'
import './styles/newsblocks.css'

const PLACEHOLDER_URL = require('../images/placeholder_news.svg')
const NewsBlocks = ({ newsList }) => {
	return (
		<div className="newsblocks">
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
						>{`Ver mas en ${news.source_name}`}</a>
					</div>
				)
			})}
		</div>
	)
}

export default NewsBlocks
