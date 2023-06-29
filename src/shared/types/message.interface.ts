export interface Message {
	_id: string
	chatId: string
	user: string
	text: string
	likedBy: string[]
	attachedFiles: string[]
	createdAt: string
	updatedAt: string
}

export interface CreateMessage {
	chatId: string
	user: string
	text: string
	attachedFiles: string[]
}

export interface DeleteMessageResponse {
	messageId: string
	chatId: string
}

export const enum MessageActions {
	send_message = 'message/send',
	receive_new = 'message/receive',

	edit = 'message/edit',
	receive_edit = 'message/receive_edit',

	like = 'message/like',
	receive_like = 'message/receive_like',

	delete = 'message/delete',
	receive_delete = 'message/receive_delete',
}
