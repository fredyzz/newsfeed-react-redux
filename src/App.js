import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<h1>App</h1>
				<Switch>
					<Route path="/about">
						<h2>About</h2>
					</Route>
					<Route path="/economia">
						<h2>economia</h2>
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
