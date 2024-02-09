import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { contestSliceState, Shot, contestTypeEnum } from '../types'

const initialState: contestSliceState = {
	shots: [],
	totalScore: 0,
	distance: 0,
	contestType: contestTypeEnum.ROUND,
}

const contestSlice = createSlice({
	name: 'contest',
	initialState,
	reducers: {
		setContestList(state, { payload }: PayloadAction<Shot[]>) {
			state.shots = payload
		},
		addShot(state, { payload }: PayloadAction<Shot>) {
			state.shots = [...state.shots, payload]
		},
		delLastShot(state) {
			state.shots = state.shots.slice(0, -1)
		},
		clearContestList(state) {
			state.shots = []
		},
		changeContestType(state) {
			state.contestType = contestTypeEnum.DUEL
			//? как его заменить чтоб одной функцией менять в обе стороны
		},
		setTotalScore(state, { payload }: PayloadAction<contestSliceState['totalScore']>) {
			state.totalScore = payload
		},
		setDistance(state, { payload }: PayloadAction<contestSliceState['distance']>) {
			state.distance = payload
		}, //? should i use string  or number here fore selection???
	},
})

export const {
	setContestList,
	clearContestList,
	addShot,
	delLastShot,
	setTotalScore,
	setDistance,
} = contestSlice.actions

export default contestSlice.reducer
