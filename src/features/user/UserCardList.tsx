import { selectChats } from '@/entities/chat/model/chatSelectors'
import { chooseChat, startNewChat } from '@/entities/chat/model/chatSlice'
import { UserCard } from '@/entities/user/ui/UserCard'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'
import { Chat, ChatStart } from '@/shared/types/chat.interface'
import { UserData } from '@/shared/types/user.interface'
import { styled } from '@mui/material'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CardList = styled('div')`
	max-height: 400px;
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: max-content;
	gap: 29px;
	margin: 28px 0;
	overflow-y: auto;
	overflow-x: hidden;
`

interface UserCardListProps {
	users: UserData[]
	refetch: () => void
}

export const UserCardList: FC<UserCardListProps> = ({ users, refetch }) => {
	const nav = useNavigate()
	const dispatch = useAppDispatch()
	const chats = useAppSelector(selectChats)

	useEffect(() => {
		refetch()
	}, [chats])

	const handleClickCard = (data: ChatStart, chat: Chat | null) => {
		if (chat) {
			dispatch(chooseChat(chat))
			return nav(`/chat/${chat._id}`, { state: chat })
		}

		dispatch(startNewChat(data))
	}

	return (
		<CardList>
			{users.map((userData) => (
				<UserCard
					key={userData._id}
					onClickCard={handleClickCard}
					userData={userData}
				/>
			))}
		</CardList>
	)
}
