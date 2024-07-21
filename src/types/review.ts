import { User } from './user'

export interface Review {
	id: string
	date: string
	user: User
	comment: string
	rating: number
}
