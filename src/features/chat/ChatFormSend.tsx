import { useChatFormSend } from '@/entities/chat'
import { IconRocket, IconRobot, IconAttach } from '@/shared/assets/icons'
import { ChatInput } from '@/shared/ui'
import { ButtonBase, styled } from '@mui/material'

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

export const ChatFormSend = () => {
	const {
		fileInputRef,
		fileList,
		formRef,
		onChangeInputFile,
		onSubmit,
		textInputRef,
		chatId,
	} = useChatFormSend()

	return (
		<StyledForm ref={formRef} onSubmit={onSubmit}>
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
			<ChatInput ref={textInputRef} />
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
