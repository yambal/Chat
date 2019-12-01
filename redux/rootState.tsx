import counterModule, { iCounterState } from '../modules/counterModule'
import configModule, { iConfigState } from '../modules/configModule'
import locationModule, { iLocationState } from '../modules/locationModule'
import nCodeModule, { iNCodeState } from '../modules/nCodeModule'

export interface iRootState {
    counter: iCounterState
    config: iConfigState,
    location: iLocationState
    nCode: iNCodeState
}

export default iRootState


export const initialState: iRootState = {
    counter : counterModule.initial,
    config: configModule.initial,
    location: locationModule.initial,
    nCode: nCodeModule.initial
}