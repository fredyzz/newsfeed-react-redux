import React from 'react'

const NewsList = ({ repos, hasError, isLoading }) => {
	if (hasError) {
		return (
			<div className="container">
				<h6>Error al buscar los repos.</h6>
			</div>
		)
	}

	if (isLoading) {
		return (
			<div className="container">
				<h6>Loading…</h6>
			</div>
		)
	}

	return (
		<div className="container">
			{repos.map((repo, i) => (
				<div
					className="row border border-info rounded bg-light p-2 m-1"
					key={i}
				>
					<div className="ml-2">
						<a href={repo.html_url} className="text-primary" target="blank">
							{repo.name}
						</a>
						<span className="badge badge-pill badge-secondary ml-2">
							{repo.stargazers_count}
						</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default NewsList
