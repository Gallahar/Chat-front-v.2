import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosRequestConfig } from 'axios'
import { axios } from './axiosInstance'
import Axios from 'axios'

export const axiosBaseQuery = <Args extends AxiosRequestConfig, Result = unknown>(
	{ baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<Args, Result> => {
	return async (args, api, extraOptions) => {
		const { url, ...rest } = args
		try {
			const result = await axios({
				url: baseUrl + url,
				...rest,
				signal: api.signal,
				...extraOptions,
			})

			return {
				data: result.data,
			}
		} catch (err) {
			if (!Axios.isAxiosError(err)) {
				return {
					error: err,
				}
			}

			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			}
		}
	}
}


