export type EventDto = {
	id: number
	time: string
	score: number
	userName: string
	nickname?: string
	userPhoto?: string
	opponentScore?: number
	opponentName?: string
	competitionPlace?: number
}
