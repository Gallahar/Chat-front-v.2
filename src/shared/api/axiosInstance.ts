import axiosInstance, {
	AxiosError,
	InternalAxiosRequestConfig,
	AxiosResponse,
} from 'axios'

import { IAuthResponse } from '@/shared/types/auth.interface'
import { getCookiesData, setAccessToken } from './cookies-js'

const axios = axiosInstance.create({
	baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL,
	responseType: 'json',
	withCredentials: true,
})

axios.interceptors.request.use(
	async (
		config: InternalAxiosRequestConfig
	): Promise<InternalAxiosRequestConfig> => {
		const accessToken = getCookiesData('accessToken')
		if (config.headers && accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}
		return config
	}
)

const onRejectedResponse = async (
	error: AxiosError<{ message: string }>
): Promise<AxiosError> => {
	if (
		error.response?.data.message === 'Access token validation failed' &&
		error.response?.status === 401
	) {
		try {
			const response: AxiosResponse<IAuthResponse> = await axios.post(
				'auth/refresh',
				{
					withCredentials: true,
				}
			)
			updateCookie(response)
			if (error.config) return axios.request(error.config)
		} catch (e) {
			console.log(e)
		}
	}

	throw error
}

const onFulfilledResponse = async (
	response: AxiosResponse<IAuthResponse>
): Promise<AxiosResponse> => {
	updateCookie(response)
	return response
}

const updateCookie = (response: AxiosResponse<IAuthResponse>) => {
	const data = response?.data
	if (data.tokens) {
		setAccessToken(data.tokens.accessToken)
	}
}

axios.interceptors.response.use(onFulfilledResponse, onRejectedResponse)

export { axios }
