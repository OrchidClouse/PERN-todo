import {GET_USERS, SET_USER} from "./usersConsts"
import { User } from "api/auth.dto"

export const getUsers = (payload: any) => {
    return { type: GET_USERS, payload }
}

export const setUser = (user: User) => {
    return { type: SET_USER, payload: user }
}


