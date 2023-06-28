import { useAppSelector } from '@/shared/lib/hooks/redux'
import { UserData } from '@/shared/types/user.interface'
import { Avatar, Box, Typography, styled } from '@mui/material'
import { Text } from '@/shared/ui/Typography/Text'
import { FC } from 'react'
import { selectUser } from '../model'
import { Chat, ChatStart } from '@/shared/types/chat.interface'
import { getDate } from '@/shared/lib/utils/getDate'

const CardWrapper = styled('div')`
	display: grid;
	grid-template-columns: 58px 175px auto;
	grid-template-rows: 1fr;
	align-items: center;
	gap: 12px;
	cursor: pointer;
`

const StyledDate = styled('span')`
	margin-top: 8px;
	align-self: start;
	font-size: 13px;
`

interface UserCardProps {
	userData: UserData
	onClickCard: (dto: ChatStart, chat: Chat | null) => void
}

export const UserCard: FC<UserCardProps> = ({ userData, onClickCard }) => {
	const { _id: fromUserId } = useAppSelector(selectUser)
	const { _id: toUserId, avatar, username, chat } = userData

	const lastMessage = chat?.messages[chat.messages.length - 1] || null
	const fromYou = lastMessage?.user === fromUserId

	return (
		<CardWrapper
			onClick={() => onClickCard({ fromUserId, toUserId }, chat)}
		>
			<Avatar sx={{ width: '58px', height: '58px' }} src={avatar} />
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '1fr',
					gridTemplateRows: '27px 23px',
				}}
			>
				<Text Size={18} text={username} />
				<Typography
					sx={{
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						wordBreak: 'initial',
						margin: 0,
					}}
					paragraph={true}
				>
					{lastMessage ? lastMessage.text : null}
				</Typography>
			</Box>
			{lastMessage && (
				<StyledDate>{getDate(lastMessage.createdAt, 'time')}</StyledDate>
			)}
		</CardWrapper>
	)
}
