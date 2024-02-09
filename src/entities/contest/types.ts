export interface Shot {
	shotNumber: number
	x: number
	y: number
	score: number
}
export enum contestTypeEnum {
	DUEL,
	ROUND,
}

export interface contestSliceState {
	shots: Shot[]
	totalScore: number
	distance: number
	contestType: contestTypeEnum
}
