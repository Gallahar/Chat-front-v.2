import { Socket, io } from 'socket.io-client'
import { Middleware } from '@reduxjs/toolkit'
import {
	openConnection,
	closeConnection,
	startNewChat,
	receiveNewChat,
	sendNewMessage,
	receiveNewMessage,
} from './chatSlice'
import { Chat, ChatActions } from '@/shared/types/chat.interface'
import { Message, MessageActions } from '@/shared/types/message.interface'
import { router } from '@/app/router/router'

export const chatMiddleWare: Middleware = ({ dispatch }) => {
	let socket: Socket
	return (next) => (action) => {
		if (openConnection.match(action)) {
			socket = io(import.meta.env.VITE_PUBLIC_API_BASE_URL, {
				withCredentials: true,
			})

			socket.emit(ChatActions.connect, action.payload)

			socket.on(ChatActions.receive_new, (chat: Chat) => {
				dispatch(receiveNewChat(chat))
			})

			socket.on(MessageActions.receive_new, (message: Message) => {
				console.log(message)
				dispatch(receiveNewMessage(message))
			})
		}

		if (startNewChat.match(action)) {
			socket.emit(ChatActions.start, action.payload, (chat: Chat) => {
				dispatch(receiveNewChat(chat))
				router.navigate(`/chat/${chat._id}`)
			})
		}

		if (sendNewMessage.match(action)) {
			socket.emit(
				MessageActions.send_message,
				action.payload,
				(message: Message) => {
					dispatch(receiveNewMessage(message))
				}
			)
		}
		if (closeConnection.match(action)) {
			socket.close()
		}

		next(action)
	}
}
