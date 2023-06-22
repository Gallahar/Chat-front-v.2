import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api'
import {
	removeAccessToken,
	removeUser,
	setAccessToken,
} from '@/shared/lib/utils/cookieService'

interface AuthState {
	isAuth: boolean
}

const initialState: AuthState = {
	isAuth: false,
}

const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		logout: (state) => {
			removeAccessToken()
			removeUser()
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
			),
			builder.addMatcher(
				authApi.endpoints.refresh.matchFulfilled,
				(state, { payload }) => {
					state.isAuth = true
					setAccessToken(payload.tokens.accessToken)
				}
			)
	},
})

export default authSlice.reducer

export const { logout } = authSlice.actions
