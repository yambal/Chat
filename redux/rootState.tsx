import counterModule, { iCounterState } from '../modules/counterModule'
import configModule, { iConfigState } from '../modules/configModule'
import locationModule, { iLocationState } from '../modules/locationModule'

export interface iRootState {
    counter: iCounterState
    config: iConfigState,
    location: iLocationState
}

export default iRootState


export const initialState: iRootState = {
    counter : counterModule.initial,
    config: configModule.initial,
    location: locationModule.initial
}