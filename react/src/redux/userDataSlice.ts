import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type Values = {
    username: string;
    password: string;
    email: string;
}

type ValuesState = {
    values: Values[];
}

const initialState: ValuesState = {
    values: [],
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        getData(state, action: PayloadAction<string>){
            console.log(state)
            console.log(action)
            state.values.push({
                username: action.payload,
                password: action.payload,
                email: action.payload
            })
        }
    }
})

export const {getData} = userDataSlice.actions
export default userDataSlice.reducer