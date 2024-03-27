import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { sessionType } from '../types'

const initialState = {
	isLoggedIn: false,
	userData: {
		userId: 0,
		name: '',
		surname: '',
		username: '',
		email: '',
		phoneNumber: 0,
		birthday: '',
		archerLevel: '',
	},
}

export const appSlice = createSlice({
	name: 'session',
	initialState: initialState,
	reducers: {
		SetLoggedIn: (state, action: PayloadAction<sessionType['isLoggedIn']>) => {
			state.isLoggedIn = action.payload
		},
		SetUserData: (state, action: PayloadAction<sessionType['userData']>) => {
			state.userData = action.payload
		},
	},
})

export const { SetLoggedIn, SetUserData } = appSlice.actions

export default appSlice.reducer
