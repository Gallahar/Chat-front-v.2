import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { baseApi } from '@/shared/api/baseApi'
import { authApi } from '@/entities/auth/api'
import authSlice from '@/entities/auth/model/auth.slice'
import userSlice from '@/entities/user/model/user.slice'
import { fileApi } from '@/shared/api/fileApi'

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[fileApi.reducerPath]: fileApi.reducer,
		authState: authSlice,
		userState: userSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)
