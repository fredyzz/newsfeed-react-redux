import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

// utilidad para ver las acciones realizadas
const logger = (store) => (next) => (action) => {
	let result
	console.groupCollapsed('despachando', action.type)
	console.log('state previo: ', store.getState())
	console.log('accion: ', action)
	result = next(action)
	console.log('proximo estado: ', store.getState())
	console.groupEnd()
	return result
}

const storeFactory = () => {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(logger, thunk))
	)
	return store
}

export default storeFactory
