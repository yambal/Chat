import counterModule, { iCounterState } from '../modules/counterModule'
import configModule, { iConfigState } from '../modules/configModule'

export interface iRootState {
    counter: iCounterState
    config: iConfigState
}

export default iRootState


export const initialState: iRootState = {
    counter : counterModule.initial,
    config: configModule.initial
}