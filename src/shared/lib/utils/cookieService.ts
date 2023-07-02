import Cookies from 'js-cookie'



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

