import backgroundImage from '@/shared/assets/images/auth/background.png'
import { styled } from '@mui/material'
import { Text } from '@/shared/ui/Typography/Text'
import { Ellipse } from '@/shared/ui'

const ChatWrapper = styled('div')`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${backgroundImage});
	border-radius: 20px;
	z-index: 0;
	min-height: 485px;

	> p {
		opacity: 0.6;
	}
`

export const Chat = () => {
	return (
		<ChatWrapper>
			<Ellipse size={300} blur={150} top={10} right={0} />
			<Text Size={16} text="Choose who you would like to write to" />
		</ChatWrapper>
	)
}
