import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import { initialState } from '../redux/rootState'
// import { routerMiddleware } from 'connected-react-router'
/** enhancer */

const enhancers:any[] = []

const middlewares = [
    // routerMiddleware(history),
    reduxThunk
]

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
)

const store = createStore(
    reducers(),
    initialState,
    composedEnhancers
)

export default store