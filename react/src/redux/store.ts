import {configureStore} from "@reduxjs/toolkit";
import getUserDataReducer from "./userDataSlice"

const store = configureStore({
  reducer: {
    userData: getUserDataReducer,
  }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch