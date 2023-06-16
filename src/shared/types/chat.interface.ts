import { Message } from "./message.interface"
import { User } from "./user.interface"

export interface Chat {
	_id: string
	createdAt: string
	updatedAt: string
	messages: Message[]
	users: User[]
}
