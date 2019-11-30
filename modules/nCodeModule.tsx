import NCode from 'jp-ncode'

export interface iNCodeState {
  NCode: string
}

/**
 * Reducer
 */
const reducer = (state: iNCodeState = initial, action: any) => {
  switch (action.type) {
    default: return state
  }
}

/**
 * State
 */
const initial:iNCodeState = {
  NCode: null
}

/**
 * Action creator
 */
const getNCode = (lat: number, lng:number) => {
  return (dispatch:any) => {
    console.log('NCode 0.0.8', NCode.getNCode(lat, lng))
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
