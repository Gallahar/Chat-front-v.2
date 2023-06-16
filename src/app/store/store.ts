import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { baseApi } from '@/shared/api/baseApi'
import { authApi } from '@/entities/auth/api'

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)
