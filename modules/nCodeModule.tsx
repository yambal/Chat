import NCode from '@yambal/n_code'

declare type ncode = {
  blockName: string
  unitName: string
  ewMeshName: string
  nsMeshName: string
}

export interface iNCodeState {
  ncode: ncode | null
}

/**
 * Action Constructor
 */
const NCODE_ACTIONS = {
  ON_GET_NCODE : 'ON_GET_NCODE'
}

/**
 * Reducer
 */
const reducer = (state: iNCodeState = initial, action: any) => {
  console.log(25, action)
  switch (action.type) {
    case NCODE_ACTIONS.ON_GET_NCODE:
        return Object.assign({}, state, { ncode: action.ncode })
    default: return state
  }
}

/**
 * State
 */
const initial:iNCodeState = {
  ncode: null
}

const getNcodeAction = (ncode: ncode) => {
  return {
    type: NCODE_ACTIONS.ON_GET_NCODE,
    ncode
  };
}

/**
 * Action creator
 */
const getNCode = (lat: number, lng:number) => {
  console.log('getNCode', lat, lng)
  return (dispatch:any) => {
    dispatch(getNcodeAction(NCode.getNCode(lat, lng)))
  };
}

const nCodeModule = {
  initial,
  reducer,
  actionCreators: {
    getNCode
  }
}

export default nCodeModule
