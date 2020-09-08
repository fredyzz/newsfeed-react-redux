import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import NewsContainer from './containers/NewsContainer'
import Footer from './components/Footer'
import Home from './components/pages/Home'

function App() {
	return (
		<Router>
			<div className="main">
				<Header title="Noticias de Argentina" />
				<Navbar />
				<Switch>
					<Route path="/negocios">
						<h2>Negocios</h2>
					</Route>
					<Route path="/interes-general">
						<h2>Interes general</h2>
					</Route>
					<Route path="/tecnologia">
						<h2>Tecnología</h2>
					</Route>
					<Route path="/economia">
						<h2>Economia</h2>
					</Route>
					<Route path="/deportes">
						<h2>Deportes</h2>
					</Route>
					<Route path="/">
						<NewsContainer ChildComponent={Home} />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
