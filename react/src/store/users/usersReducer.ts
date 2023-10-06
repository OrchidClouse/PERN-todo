import {GET_DATA} from './usersConsts'

const initialState = {
    values: [],
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                values: [...state.values, {
                    fullName: action.payload,
                    password: action.payload,
                    email: action.payload
                }]
            }
        default:
            return state;
    }
}