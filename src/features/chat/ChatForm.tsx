import { AttachSvg } from '@/shared/assets/icons/AttachSvg'
import { EmojiRobot } from '@/shared/assets/icons/EmojiRobot'
import { RocketSvg } from '@/shared/assets/icons/RocketSvg'
import { Input } from '@/shared/ui'
import { ButtonBase, styled } from '@mui/material'

const StyledForm = styled('form')`
	display: flex;
	align-items: center;
	gap: 19px;
`

export const ChatForm = () => {
	return (
		<StyledForm>
			<EmojiRobot />
			<AttachSvg />
			<Input inputVariant="chat" />
			<ButtonBase>
				<RocketSvg />
			</ButtonBase>
		</StyledForm>
	)
}
