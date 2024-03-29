import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { sessionType } from '../types'

const initialState = {
	isLoggedIn: false,
}

export const appSlice = createSlice({
	name: 'session',
	initialState: initialState,
	reducers: {
		setLoggedIn: (state, action: PayloadAction<sessionType['isLoggedIn']>) => {
			state.isLoggedIn = action.payload
		},
	},
})

export const { setLoggedIn } = appSlice.actions

export default appSlice.reducer
