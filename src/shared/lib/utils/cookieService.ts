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
