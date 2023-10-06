import {GET_DATA} from "./usersConsts"

export const getData = (payload: any) => {
    return { type: GET_DATA, payload }
}
