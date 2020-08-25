import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
	return (
		<Router>
			<div className="main">
				<Navbar />
				<h1>App</h1>
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
						<h2>Home</h2>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
