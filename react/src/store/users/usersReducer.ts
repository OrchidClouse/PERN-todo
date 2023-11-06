import {GET_USERS, SET_USER} from './usersConsts'
import { User } from 'api/auth.dto'
import { setUser } from './usersActions'

const userInitialState: User | null = null

export const userReducer = (state = userInitialState, action: ReturnType<typeof setUser>) => {
    switch (action.type) {
        case SET_USER:
            return action.payload
        default:
            return state;
    }
}