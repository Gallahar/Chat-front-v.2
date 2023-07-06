import {
	AttachmentFilePreview,
	AttachmentFilesWrapper,
	FormWrapper,
	StyledForm,
	useChatFormSend,
} from '@/entities/chatForm'
import {
	IconRocket,
	IconRobot,
	IconAttach,
	IconUndo,
} from '@/shared/assets/icons'
import { ChatInput } from '@/shared/ui'
import { ButtonBase } from '@mui/material'

export const ChatFormSend = () => {
	const {
		fileInputRef,
		fileList,
		formRef,
		onChangeInputFile,
		deleteFile,
		onSubmit,
		textInputRef,
		chatId,
	} = useChatFormSend()

	return (
		<FormWrapper>
			<AttachmentFilesWrapper files={fileList.length > 0}>
				{fileList.map((file) => (
					<AttachmentFilePreview key={file}>
						<img src={file} />
						<IconUndo onClick={() => deleteFile(file)} />
					</AttachmentFilePreview>
				))}
			</AttachmentFilesWrapper>
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
			</StyledForm>
		</FormWrapper>
	)
}
