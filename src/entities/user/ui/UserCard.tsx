import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'
import { UserData } from '@/shared/types/user.interface'
import { Avatar, Box, Typography, styled } from '@mui/material'
import { Text } from '@/shared/ui/Typography/Text'
import { FC } from 'react'
import { selectUser } from '../model'
import { getDate } from '@/shared/lib/utils/getDate'
import { useNavigate, useParams } from 'react-router-dom'
import { chooseChat, startNewChat } from '@/entities/chat'

const CardWrapper = styled('div')<{ selected: boolean }>`
	transition: background-size 0.7s ease-in-out;
	background-image: var(--bg-selectedMessage);
	background-repeat: no-repeat;
	background-size: ${(props) => (props.selected ? 100 : 0)}%;
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
	justify-self: end;
	font-size: 13px;
`

interface UserCardProps {
	userData: UserData
}

export const UserCard: FC<UserCardProps> = ({ userData }) => {
	const { id } = useParams()
	const nav = useNavigate()
	const dispatch = useAppDispatch()
	const { _id: fromUserId } = useAppSelector(selectUser)
	const { _id: toUserId, avatar, username, chat } = userData
	const selectedUser = chat?._id === id
	const lastMessage = chat?.messages[chat.messages.length - 1] || null

	const handleClickCard = () => {
		if (chat) {
			dispatch(chooseChat(chat))
			return nav(`/chat/${chat._id}`)
		}

		dispatch(startNewChat({ fromUserId, toUserId }))
	}

	return (
		<CardWrapper
			selected={selectedUser && id !== undefined}
			onClick={handleClickCard}
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
				<StyledDate>
					{getDate(lastMessage.createdAt, 'time')}
				</StyledDate>
			)}
		</CardWrapper>
	)
}
