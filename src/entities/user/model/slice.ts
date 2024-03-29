import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { userData } from '../types'

const initialState = {
	name: '',
	surname: '',
	username: '',
	email: '',
	phoneNumber: '',
	birthday: '',
	archerLevel: '',
	bowXParameter: 0,
	bowYParameter: 0,
	bowBase: 0,
}

export const appSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<userData>) => {
			state.name = action.payload.name
			state.surname = action.payload.surname
			state.username = action.payload.username
			state.email = action.payload.email
			state.phoneNumber = action.payload.phoneNumber
			state.birthday = action.payload.birthday
			state.archerLevel = action.payload.archerLevel
			state.bowXParameter = action.payload.bowXParameter
			state.bowYParameter = action.payload.bowYParameter
			state.bowBase = action.payload.bowBase
		},
		removeUserData: state => {
			state.name = ''
			state.surname = ''
			state.username = ''
			state.email = ''
			state.phoneNumber = ''
			state.birthday = ''
			state.archerLevel = ''
			state.bowXParameter = 0
			state.bowYParameter = 0
			state.bowBase = 0
		},
	},
})

export const { setUserData } = appSlice.actions

export default appSlice.reducer
