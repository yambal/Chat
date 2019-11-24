import { combineReducers, Reducer } from 'redux'
import counterModule from '../modules/counterModule'
import configModule from '../modules/configModule'

const reducers = () => combineReducers<Reducer>({
    config: configModule.reducer,
    counter: counterModule.reducer
})

export default reducers