export type Round = {
	id: number
	score: number
	createdDate: string
}

export type User = {
	id: number
	name: string
	pictureUrl: string
	rank: string
	surname: string
	username: string
}

export type ClubMemberRound = {
	id: number
	date: string
	score: number
	userName: string
	userSurname: string
	nickname: string
	image: string
}
