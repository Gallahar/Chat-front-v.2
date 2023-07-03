import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api'
import {
	removeAccessToken,
	setAccessToken,
} from '@/shared/lib/utils/cookieService'
import {
	removeCurrentChat,
	removeUser,
} from '@/shared/lib/utils/LocalStorageService'

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
			removeCurrentChat()
			state.isAuth = false
		},
		setAuth:(state)=>{
			state.isAuth = true
		}
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
