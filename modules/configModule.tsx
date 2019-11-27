  
import { 
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STRAGE_BUCKET
} from 'react-native-dotenv'

export interface iConfigState {
    FIREBASE_API_KEY: string
    FIREBASE_AUTH_DOMAIN: string
    FIREBASE_DATABASE_URL: string
    FIREBASE_PROJECT_ID: string
    FIREBASE_STRAGE_BUCKET: string
}

export const initial:iConfigState = {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STRAGE_BUCKET
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