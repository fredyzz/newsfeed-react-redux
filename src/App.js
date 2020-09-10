import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import NewsContainer from './containers/NewsContainer'
import NewsPage from './components/pages/NewsPage'

const ROUTES_INFORMATION = [
	{ path: '/negocios', title: 'negocios' },
	{ path: '/interes-general', title: 'interés general' },
	{ path: '/tecnologia', title: 'tecnología' },
	{ path: '/economia', title: 'economía' },
	{ path: '/deportes', title: 'deportes' },
	{ path: '/', mainPage: true }
]

function App() {
	return (
		<Router>
			<div className="main">
				<Header title="Noticias de Argentina" />
				<Navbar />
				<Switch>
					{ROUTES_INFORMATION.map((route) => (
						<Route path={route.path} key={route.path}>
							<NewsContainer
								ChildComponent={NewsPage}
								title={route.title}
								mainPage={route.mainPage ? route.mainPage : false}
							/>
						</Route>
					))}
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
