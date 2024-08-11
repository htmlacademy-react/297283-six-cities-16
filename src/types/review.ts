import { UserShort } from './user'

export interface Review {
	id: string
	date: string
	user: UserShort
	comment: string
	rating: number
}
