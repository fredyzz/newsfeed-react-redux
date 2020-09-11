import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import NewsContainer from './containers/NewsContainer'
import NewsPage from './components/pages/NewsPage'
import Error from './components/Error'
// Import constants
import { ROUTES_INFORMATION } from './utils/variables'
import { TITLE } from './utils/variables'

function App() {
	return (
		<Router>
			<div className="main">
				<Header title={TITLE} />
				<Navbar />
				<Switch>
					{ROUTES_INFORMATION.map((route) => (
						<Route
							path={route.path}
							key={route.path}
							exact={route.mainPage ? true : false}
						>
							<NewsContainer
								ChildComponent={NewsPage}
								title={route.title}
								mainPage={route.mainPage ? route.mainPage : false}
								endpoint={route.endpoint ? route.endpoint : null}
							/>
						</Route>
					))}
					<Route>
						<Error
							message="La dirección ingresada no existe"
							link="/"
							linkName="home"
						/>
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
