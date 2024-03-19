import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { sessionType } from '../types'

const initialState = {
	isLoggedIn: false,
	userData: {
		userId: 0,
	},

	// token: '',
}

export const appSlice = createSlice({
	name: 'session',
	initialState: initialState,
	reducers: {
		// SetJWToken: (state, action) => {
		// 	state.token = action.payload
		// },
		SetLoggedIn: (state, action: PayloadAction<sessionType['isLoggedIn']>) => {
			state.isLoggedIn = action.payload
		},
		SetUserData: (state, action: PayloadAction<sessionType['userData']>) => {
			state.userData = action.payload
		},
	},
})

export const {
	// SetJWToken,
	SetLoggedIn,
	SetUserData,
} = appSlice.actions

export default appSlice.reducer
