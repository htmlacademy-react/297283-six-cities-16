export interface User {
	name: string
	avatarUrl: string
	isPro: boolean
	email: string
	token: string
}

export type UserShort = Pick<User, 'name' | 'avatarUrl' | 'isPro'>
