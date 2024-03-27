export interface userData {
	userId: number
	name: string
	surname: string
	username: string
	email: string
	phoneNumber: number
	birthday: string
	archerLevel: string
}

export interface sessionType {
	userData: userData
	isLoggedIn: boolean
}
