import { sendNewMessage } from '@/entities/chat/model/chatSlice'
import { selectUser } from '@/entities/user'
import { IconRocket, IconRobot, IconAttach } from '@/shared/assets/icons'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'
import { useFile } from '@/shared/lib/hooks/useFile'
import { ChatInput } from '@/shared/ui'
import { ButtonBase, styled } from '@mui/material'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const StyledForm = styled('form')`
	position: relative;
	display: flex;
	align-items: center;
	gap: 19px;
`

const AttachmentFilePreview = styled('img')`
	top: -240px;
	left: -20px;
	border: 2px solid grey;
	border-radius: 20px;
	position: absolute;
	width: 100px;
	height: 200px;
`

interface ChatFormValues {
	text: string
}

export const ChatForm = () => {
	const { fileUrl, onChangeInputFile, setFileUrl } = useFile('message')
	const user = useAppSelector(selectUser)._id
	const { id: chatId } = useParams()
	const dispatch = useAppDispatch()
	const inputRef = useRef<HTMLInputElement>(null)

	const {
		register,
		formState: { isValid },
		handleSubmit,
		reset,
	} = useForm<ChatFormValues>({ mode: 'onChange' })

	const sendMessage = handleSubmit((data) => {
		if (!chatId) {
			return alert('please select someone to send a message')
		}
		const trimmedInput = data.text.trim()
		if (trimmedInput) {
			dispatch(
				sendNewMessage({
					...data,
					user,
					chatId,
					attachedFiles: fileUrl ? [fileUrl] : [],
				})
			)
		}

		reset()
		setFileUrl('')
	})

	return (
		<StyledForm onSubmit={sendMessage}>
			<IconRobot />
			<ButtonBase
				disabled={chatId === undefined}
				onClick={() => inputRef?.current?.click()}
			>
				<IconAttach />
			</ButtonBase>
			<input
				type="file"
				ref={inputRef}
				hidden
				onChange={onChangeInputFile}
			/>
			<ChatInput {...register('text', { required: true })} />
			<ButtonBase type="submit">
				<IconRocket />
			</ButtonBase>
			{fileUrl && <AttachmentFilePreview src={fileUrl} />}
		</StyledForm>
	)
}
