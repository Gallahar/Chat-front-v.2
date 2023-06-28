import { Chat } from '@/shared/types/chat.interface'
import { User } from '@/shared/types/user.interface'
import Cookies from 'js-cookie'

export const getUser = (): User | null => {
	const user = Cookies.get('user')
	return user ? JSON.parse(user) : null
}

export const setUser = (user: User) => {
	Cookies.set('user', JSON.stringify(user))
}

export const removeUser = () => {
	Cookies.remove('user')
}

export const changeAvatar = (avatar: string) => {
	const user = getUser()
	if (user) {
		user.avatar = avatar
		Cookies.set('user', JSON.stringify(user))
	}
}

export const changeUsername = (username: string) => {
	const user = getUser()
	if (user) {
		user.username = username
		Cookies.set('user', JSON.stringify(user))
	}
}

export const getAccessToken = () => {
	const token = Cookies.get('accessToken')
	return token ? JSON.parse(token) : null
}

export const setAccessToken = (token: string) => {
	Cookies.set('accessToken', JSON.stringify(token))
}

export const removeAccessToken = () => {
	Cookies.remove('accessToken')
}

export const getCurrentChat = (): Chat | null => {
	const currentChat = Cookies.get('currentChat')
	return currentChat ? JSON.parse(currentChat) : null
}

export const setCurrentChat = (chat: Chat) => {
	Cookies.set('currentChat', JSON.stringify(chat))
}

export const removeCurrentChat = () => {
	Cookies.remove('currentChat')
}
