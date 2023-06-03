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
        getData(state, action: PayloadAction<object>){
            console.log(state)
            console.log(action)

        }
    }
})

export const {getData} = userDataSlice.actions
export default userDataSlice.reducer