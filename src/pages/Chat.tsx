import backgroundImage from '@/shared/assets/images/auth/background.png'
import { styled } from '@mui/material'
import { Text } from '@/shared/ui/Typography/Text'

const ChatWrapper = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${backgroundImage});
	border-radius: 20px;

	> p {
		opacity: 0.6;
	}
`

export const Chat = () => {
	return (
		<ChatWrapper>
			<Text Size={16} text="Choose who you would like to write to" />
		</ChatWrapper>
	)
}
