import { Message } from '@/shared/types/message.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface chatFormState {
	defaultValue: Pick<Message, 'attachedFiles' | 'text' | '_id'>
	mode: 'edit' | 'send'
}

const initialState: chatFormState = {
	defaultValue: {
		_id: '',
		attachedFiles: [],
		text: '',
	},
	mode: 'send',
}

const chatFormSlice = createSlice({
	name: 'chatFormSlice',
	initialState,
	reducers: {
		setMode: (
			state,
			{
				payload,
			}: PayloadAction<Pick<Message, 'attachedFiles' | 'text' | '_id'>>
		) => {
			state.mode = 'edit'
			state.defaultValue = payload
		},
		resetState: (state) => {
			state.defaultValue = initialState.defaultValue
		},
	},
})

export default chatFormSlice.reducer

export const { setMode, resetState } = chatFormSlice.actions
