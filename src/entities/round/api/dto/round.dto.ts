export type UserDto = {
	id: number
	name: string
	pictureUrl: string
	rank: string
	surname: string
	username: string
}

export type UserRoundDto = {
	id: number
	score: number
	createdDate: string
}

export type ClubMemberRoundDto = {
	id: number
	date: string
	score: number
	userName: string
	userSurname: string
	nickname: string
	image: string
}
