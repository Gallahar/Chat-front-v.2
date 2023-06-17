import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api'
import { removeAccessToken, setAccessToken } from '@/shared/api'

interface AuthSlice {
	isAuth: boolean
}

const initialState: AuthSlice = {
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		logout: (state) => {
			removeAccessToken()
			state.isAuth = false
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authApi.endpoints.login.matchFulfilled,
			(state, { payload }) => {
				state.isAuth = true
				setAccessToken(payload.tokens.accessToken)
			}
		),
			builder.addMatcher(
				authApi.endpoints.register.matchFulfilled,
				(state, { payload }) => {
					state.isAuth = true
					setAccessToken(payload.tokens.accessToken)
				}
			)
	},
})
