import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { baseApi } from '@/shared/api/baseApi'
import { authApi } from '@/entities/auth'
import authSlice from '@/entities/auth/model/authSlice'
import userSlice from '@/entities/user/model/userSlice'
import { fileApi } from '@/shared/api/fileApi'
import { userApi } from '@/entities/user'
import chatSlice from '@/entities/chat/model/chatSlice'
import { chatMiddleWare } from '@/entities/chat/model/chatMiddleware'
import chatFormSlice from '@/entities/chatform/model/chatFormSlice'

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[fileApi.reducerPath]: fileApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		authState: authSlice,
		userState: userSlice,
		chatState: chatSlice,
		chatFormState: chatFormSlice
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({}).concat(baseApi.middleware, chatMiddleWare),
})

setupListeners(store.dispatch)
