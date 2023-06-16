import { Chat } from './chat.interface'
import { User } from './user.interface'

type Token = {
	accessToken: string
}

export interface AuthResponse {
	tokens: Token
	user: User
	chats: Chat[] | []
}

export interface AuthData {
	email: string
	username?: string
	password: string
}

