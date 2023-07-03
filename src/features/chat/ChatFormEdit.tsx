import { useChatFormEdit } from '@/entities/chat'
import {
	IconAttach,
	IconChecked,
	IconRobot,
	IconUndo,
	IconEdit,
} from '@/shared/assets/icons'

import { ChatInput } from '@/shared/ui'
import { ButtonBase, styled } from '@mui/material'

const StyledForm = styled('form')`
	padding-top: 20px;
	position: relative;
	display: flex;
	align-items: center;
	gap: 19px;
`

const EditInfoWrapper = styled('div')`
	left: 0;
	top: -35px;
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const InfoWrapper = styled('div')`
	display: flex;
	gap: 12px;
`

const StyledText = styled('p')`
	color: rgba(255, 255, 255, 0.5);
	font-size: 15px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	width: 480px;
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

export const ChatFormEdit = () => {
	const {
		fileInputRef,
		fileList,
		handleUndo,
		onChangeInputFile,
		onSubmit,
		textFieldProps,
	} = useChatFormEdit()

	return (
		<StyledForm onSubmit={onSubmit}>
			<IconRobot />
			<ButtonBase onClick={() => fileInputRef?.current?.click()}>
				<IconAttach />
			</ButtonBase>
			<input
				type="file"
				ref={fileInputRef}
				hidden
				onChange={onChangeInputFile}
			/>
			<ChatInput {...textFieldProps}>
				<EditInfoWrapper>
					<InfoWrapper>
						<IconEdit />
						<StyledText>{textFieldProps.defaultValue}</StyledText>
					</InfoWrapper>
					<ButtonBase onClick={handleUndo}>
						<IconUndo />
					</ButtonBase>
				</EditInfoWrapper>
			</ChatInput>
			<ButtonBase type="submit">
				<IconChecked />
			</ButtonBase>
			<AttachmentFilesWrapper>
				{fileList.map((file) => (
					<AttachmentFilePreview key={file} src={file} />
				))}
			</AttachmentFilesWrapper>
		</StyledForm>
	)
}
