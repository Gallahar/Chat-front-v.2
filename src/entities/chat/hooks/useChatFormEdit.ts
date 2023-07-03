import { selectChatForm, resetState } from '@/entities/chatform'
import { useAppSelector, useAppDispatch } from '@/shared/lib/hooks/redux'
import { useFile } from '@/shared/lib/hooks/useFile'
import {
	ChangeEvent,
	FormEventHandler,
	InputHTMLAttributes,
	RefObject,
	useEffect,
	useRef,
} from 'react'
import { useForm } from 'react-hook-form'
import { editMessage } from '..'

interface ChatFormValues {
	text: string
}

interface UseChatFormEditReturn {
	onChangeInputFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	fileList: string[]
	textFieldProps: InputHTMLAttributes<HTMLInputElement>
	onSubmit: FormEventHandler<HTMLFormElement>
	fileInputRef: RefObject<HTMLInputElement>
	handleUndo: () => void
}

export const useChatFormEdit = (): UseChatFormEditReturn => {
	const { defaultValue } = useAppSelector(selectChatForm)
	const dispatch = useAppDispatch()
	const { register, handleSubmit, setFocus } = useForm<ChatFormValues>()
	const fileInputRef = useRef<HTMLInputElement>(null)
	const { fileList, onChangeInputFile } = useFile(
		'message',
		'chat',
		defaultValue.attachedFiles
	)

	useEffect(() => {
		setFocus('text')
	}, [setFocus])

	const handleUndo = () => {
		dispatch(resetState())
	}

	const handleEdit = handleSubmit((data) => {
		dispatch(
			editMessage({
				...data,
				messageId: defaultValue._id,
				attachedFiles: fileList,
			})
		)

		handleUndo()
	})

	const textFieldProps = {
		defaultValue: defaultValue.text,
		...register('text'),
	}

	return {
		fileInputRef,
		fileList,
		onChangeInputFile,
		handleUndo,
		textFieldProps,
		onSubmit: handleEdit,
	}
}
