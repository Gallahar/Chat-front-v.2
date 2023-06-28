import {
	selectCurrentChat,
	selectFriend,
} from '@/entities/chat/model/chatSelectors'
import { selectUser } from '@/entities/user'
import { useAppSelector } from '@/shared/lib/hooks/redux'
import { Avatar, styled } from '@mui/material'
import { Text } from '@/shared/ui'
import { MessageCard } from '@/entities/chat/ui/MessageCard'

const ListWrapper = styled('div')`
	overflow-y: auto;
	display: grid;
	grid-template-columns: 1fr;
	gap: 12px;
	padding: 0 20px 40px;
`

const ListHeadingWrapper = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	padding: 40px 0;
`
const StyledSpeech = styled('span')`
	color: rgba(255, 255, 255, 0.6);
	font-size: 13px;
	line-height: 150%;
	letter-spacing: 0.02em;
`

export const MessagesList = () => {
	const { messages } = useAppSelector(selectCurrentChat)
	const currentUserId = useAppSelector(selectUser)._id
	const { avatar, username } = useAppSelector((state) =>
		selectFriend(state, currentUserId)
	)

	return (
		<ListWrapper>
			<ListHeadingWrapper>
				<Avatar sx={{ width: 100, height: 100 }} src={avatar} />
				<Text Size={18} text={username} />
				<StyledSpeech>Write something</StyledSpeech>
			</ListHeadingWrapper>
			{messages.map((message) => (
				<MessageCard
					key={message._id}
					message={message}
					avatar={avatar}
				/>
			))}
		</ListWrapper>
	)
}
