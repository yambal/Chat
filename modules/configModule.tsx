  
import { TEST_STRING } from 'react-native-dotenv'

export interface iConfigState {
    testString?: string
}

export const initial:iConfigState = {
    testString: TEST_STRING
}

/**
 * Reducer
 */
const reducer = (state: iConfigState = initial, action: any) => {
    switch (action.type) {
        default: return state
    }
}


const configModule = {
    initial,
    reducer
}

export default configModule