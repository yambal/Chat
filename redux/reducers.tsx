import { combineReducers, Reducer } from 'redux'
import counterModule from '../modules/counterModule'
import configModule from '../modules/configModule'
import locationModule from '../modules/locationModule'

const reducers = () => combineReducers<Reducer>({
    config: configModule.reducer,
    counter: counterModule.reducer,
    location: locationModule.reducer
})

export default reducers