import { styled } from '@mui/material'
import backgroundImage from '@/shared/assets/images/auth/background.png'
import { MessagesList } from '@/widgets/chat/MessagesList'
import { Ellipse } from '@/shared/ui'

const ChatRoomWrapper = styled('div')`
	position: 'relative';
	background: url(${backgroundImage});
	border-radius: 20px;
	max-height: 485px;
	overflow-y: auto;
	z-index: 0;
`

export const ChatRoom = () => {
	return (
		<ChatRoomWrapper>
			<Ellipse size={300} blur={150} top={10} right={0} />
			<MessagesList />
		</ChatRoomWrapper>
	)
}
