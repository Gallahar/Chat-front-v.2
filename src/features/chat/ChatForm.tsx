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

const AttachmentFilesWrapper = styled('div')`
	position: absolute;
	top: -130px;
	left: -20px;
	display: flex;
	gap: 5	px;
`

const AttachmentFilePreview = styled('img')`
	border: 2px solid grey;
	border-radius: 20px;
	width: 100px;
	height: 100px;
`

interface ChatFormValues {
	text: string
}

export const ChatForm = () => {
	const { fileList, onChangeInputFile, setFileList } = useFile(
		'message',
		'chat'
	)
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
		if (trimmedInput || fileList.length > 0) {
			dispatch(
				sendNewMessage({
					...data,
					user,
					chatId,
					attachedFiles: fileList,
				})
			)
		}

		reset()
		setFileList([])
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
			<ChatInput {...register('text')} />
			<ButtonBase type="submit">
				<IconRocket />
			</ButtonBase>
			{fileList.length > 0 && (
				<AttachmentFilesWrapper>
					{fileList.map((file) => (
						<AttachmentFilePreview key={file} src={file} />
					))}
				</AttachmentFilesWrapper>
			)}
		</StyledForm>
	)
}
