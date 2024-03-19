import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoggedIn: false,
	token: '',
}

export const appSlice = createSlice({
	name: 'session',
	initialState: initialState,
	reducers: {
		SetJWToken: (state, action) => {
			state.token = action.payload
		},
		SetLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload
		},
	},
})

export const { SetJWToken, SetLoggedIn } = appSlice.actions

export default appSlice.reducer
