import counterModule, { iCounterState } from '../modules/counterModule'

export interface iRootState {
    counter: iCounterState
}

export default iRootState


export const initialState: iRootState = {
    counter : counterModule.initial
}