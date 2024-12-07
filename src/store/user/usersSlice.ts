import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from 'store'
import { User } from 'types/usersTypes'

export interface UsersState{
	user: User
}

const initialState: UsersState = {
	user: {
		id: 0,
		email: '',
		name: ''
	}
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
		},
		logout: (state) => {
			state.user = {
				id: 0,
				email: '',
				name: ''
			}
		}
	}
})