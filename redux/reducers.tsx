import { combineReducers, Reducer } from 'redux'
import counterModule from '../modules/counterModule'
import configModule from '../modules/configModule'
import locationModule from '../modules/locationModule'
import nCodeModule from '../modules/nCodeModule'

const reducers = () => combineReducers<Reducer>({
    config: configModule.reducer,
    counter: counterModule.reducer,
    location: locationModule.reducer,
    nCode: nCodeModule.reducer
})

export default reducers