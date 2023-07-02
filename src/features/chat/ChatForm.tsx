import { editMessage, sendNewMessage } from '@/entities/chat/model/chatSlice'
import { resetState, selectChatForm } from '@/entities/chatform'
import { selectUser } from '@/entities/user'
import { IconRocket, IconRobot, IconAttach } from '@/shared/assets/icons'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'
import { useFile } from '@/shared/lib/hooks/useFile'
import { ChatInput } from '@/shared/ui'
import { ButtonBase, styled } from '@mui/material'
import { useEffect, useRef } from 'react'
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
	gap: 5 px;
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
	const {
		register,
		formState: { isValid },
		handleSubmit,
		reset,
		setFocus,
	} = useForm<ChatFormValues>({ mode: 'onChange' })
	const { defaultValue, mode } = useAppSelector(selectChatForm)
	const { fileList, onChangeInputFile, setFileList } = useFile(
		'message',
		'chat',
		defaultValue.attachedFiles
	)
	const user = useAppSelector(selectUser)._id
	const { id: chatId } = useParams()
	const dispatch = useAppDispatch()
	const fileInputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setFocus('text')
		setFileList(defaultValue.attachedFiles)
	}, [mode])

	const sendMessage = handleSubmit((data) => {
		if (!chatId) {
			return
		}

		if (mode === 'send') {
			dispatch(
				sendNewMessage({
					...data,
					user,
					chatId,
					attachedFiles: fileList,
				})
			)
		} else {
			dispatch(
				editMessage({
					messageId: defaultValue._id,
					...data,
					attachedFiles: fileList,
				})
			)
			dispatch(resetState())
		}

		reset()
		setFileList([])
	})

	return (
		<StyledForm onSubmit={sendMessage}>
			<IconRobot />
			<ButtonBase
				disabled={chatId === undefined}
				onClick={() => fileInputRef?.current?.click()}
			>
				<IconAttach />
			</ButtonBase>
			<input
				type="file"
				ref={fileInputRef}
				hidden
				onChange={onChangeInputFile}
			/>
			<ChatInput {...register('text')} defaultValue={defaultValue.text} />
			<ButtonBase disabled={chatId === undefined} type="submit">
				<IconRocket />
			</ButtonBase>
			<AttachmentFilesWrapper>
				{fileList.map((file) => (
					<AttachmentFilePreview key={file} src={file} />
				))}
			</AttachmentFilesWrapper>
		</StyledForm>
	)
}
