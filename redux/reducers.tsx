import { combineReducers, Reducer } from 'redux'
import counterModule from '../modules/counterModule'

const reducers = () => combineReducers<Reducer>({
    counter: counterModule.reducer
})

export default reducers