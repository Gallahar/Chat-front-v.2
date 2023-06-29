import { authApi } from '@/entities/auth'
import {
	getCurrentChat,
	setCurrentChat,
} from '@/shared/lib/utils/cookieService'
import {
	Chat,
	ChatStart,
	CreateConnection,
} from '@/shared/types/chat.interface'
import {
	CreateMessage,
	DeleteMessageResponse,
	Message,
} from '@/shared/types/message.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ChatState {
	isConnected: boolean
	chats: Chat[]
	currentChat: Chat
}

const initialState: ChatState = {
	isConnected: false,
	chats: [],
	currentChat: getCurrentChat() ?? {
		_id: '',
		createdAt: '',
		updatedAt: '',
		messages: [],
		users: [],
	},
}

const chatSlice = createSlice({
	name: 'chatSlice',
	initialState,
	reducers: {
		openConnection: (state, action: PayloadAction<CreateConnection>) => {
			state.isConnected = true
		},
		closeConnection: (state) => {
			state.isConnected = false
		},
		startNewChat: (state, action: PayloadAction<ChatStart>) => {
			state.isConnected = true
		},
		receiveNewChat: (state, action: PayloadAction<Chat>) => {
			state.chats.push(action.payload)
			state.currentChat = action.payload
			setCurrentChat(action.payload)
		},
		chooseChat: (state, action: PayloadAction<Chat>) => {
			state.currentChat = action.payload
			setCurrentChat(action.payload)
		},
		sendNewMessage: (state, action: PayloadAction<CreateMessage>) => {
			state.isConnected = true
		},
		receiveNewMessage: (state, action: PayloadAction<Message>) => {
			const chatIdx = state.chats.findIndex(
				(chat) => chat._id === action.payload.chatId
			)
			state.chats[chatIdx].messages.push(action.payload)
			if (state.currentChat._id === state.chats[chatIdx]._id) {
				state.currentChat.messages.push(action.payload)
			}
		},
		deleteMessage: (
			state,
			action: PayloadAction<{ messageId: string }>
		) => {
			state.currentChat.messages = state.currentChat.messages.filter(
				(message) => message._id !== action.payload.messageId
			)
			state.chats = state.chats.map((chat) =>
				chat._id === state.currentChat._id ? state.currentChat : chat
			)
		},
		receiveDeletedMessage: (
			state,
			action: PayloadAction<DeleteMessageResponse>
		) => {
			const chatIndex = state.chats.findIndex(
				(chat) => chat._id === action.payload.chatId
			)
			state.currentChat.messages = state.currentChat.messages.filter(
				(message) => message._id !== action.payload.messageId
			)
			state.chats[chatIndex].messages = state.currentChat.messages
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authApi.endpoints.login.matchFulfilled,
			(state, { payload }) => {
				const currentChat = payload.chats.find(
					(chat) => chat._id === getCurrentChat()?._id
				)
				state.chats = payload.chats
				if (currentChat) {
					setCurrentChat(currentChat)
					state.currentChat = currentChat
				}
			}
		),
			builder.addMatcher(
				authApi.endpoints.register.matchFulfilled,
				(state, { payload }) => {
					const currentChat = payload.chats.find(
						(chat) => chat._id === getCurrentChat()?._id
					)
					state.chats = payload.chats
					if (currentChat) {
						setCurrentChat(currentChat)
						state.currentChat = currentChat
					}
				}
			),
			builder.addMatcher(
				authApi.endpoints.refresh.matchFulfilled,
				(state, { payload }) => {
					const currentChat = payload.chats.find(
						(chat) => chat._id === getCurrentChat()?._id
					)
					state.chats = payload.chats
					if (currentChat) {
						setCurrentChat(currentChat)
						state.currentChat = currentChat
					}
				}
			)
	},
})

export default chatSlice.reducer

export const {
	openConnection,
	closeConnection,
	startNewChat,
	receiveNewChat,
	chooseChat,
	sendNewMessage,
	receiveNewMessage,
	deleteMessage,
	receiveDeletedMessage,
} = chatSlice.actions
