import { IUser } from '@/shared/types/user.interface'
import Cookies from 'js-cookie'

export const getCookiesData = (key: string) => {
	const data = Cookies.get(key)
	return data ? JSON.parse(data) : null
}

export const setUser = (user: IUser) => {
	Cookies.set('user', JSON.stringify(user))
}

export const setAccessToken = (token: string) => {
	Cookies.set('accessToken', token)
}
