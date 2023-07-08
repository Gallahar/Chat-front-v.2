import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'
import { UserData } from '@/shared/types/user.interface'
import { Avatar, styled } from '@mui/material'
import { Text } from '@/shared/ui/Typography/Text'
import { FC } from 'react'
import { selectUser } from '../model'
import { useNavigate, useParams } from 'react-router-dom'
import { chooseChat, startNewChat } from '@/entities/chat'
import { getRelativeCalendarTime } from '@/shared/lib/utils/getRelativeCalendarTime'
import { mobileXS } from '@/shared/lib/constants/media'

const CardWrapper = styled('div')<{ selected: boolean }>`
	transition: background-size 0.7s ease-in-out;
	background-image: var(--bg-selectedMessage);
	background-repeat: no-repeat;
	background-size: ${(props) => (props.selected ? 100 : 0)}%;
	display: grid;
	grid-template-columns: 58px minmax(max-content, 1fr) auto;
	grid-template-rows: 30px 26px;
	align-items: center;
	gap: 0 12px;
	cursor: pointer;
	padding-right: 4px;

	@media ${mobileXS} {
		grid-template-columns: 50px minmax(max-content, 1fr) auto;
		gap: 0 10px;
		.MuiAvatar-root {
			height: 50px;
			width: 50px;
		}
		p {
			font-size: 16px;
		}
	}
`

const StyledDate = styled('span')`
	line-height: 220%;
	align-self: start;
	justify-self: end;
	font-size: 13px;

	@media ${mobileXS} {
		font-size: 12px;
		line-height: 250%;
	}
`

const StyledLastMessage = styled('span')`
	grid-column: 2/4;
	text-overflow: ellipsis;
	line-height: 150%;
	letter-spacing: 0.3px;
	font-size: 15px;
	overflow: hidden;
	white-space: nowrap;
	width: calc(100%);
	max-width: 175px;
	margin: 0;

	@media ${mobileXS} {
		font-size: 13px;
		width: calc(80%);
	}
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
			<Avatar
				sx={{ width: '56px', height: '56px', gridRow: 'span 2' }}
				src={avatar}
			/>
			<Text Size={18} text={username} />
			{lastMessage && (
				<StyledDate>
					{getRelativeCalendarTime(lastMessage.createdAt)}
				</StyledDate>
			)}
			<StyledLastMessage>
				{lastMessage ? lastMessage.text : null}
			</StyledLastMessage>
		</CardWrapper>
	)
}
