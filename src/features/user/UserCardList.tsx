import { UserCard } from '@/entities/user/ui/UserCard'
import { useAppDispatch } from '@/shared/lib/hooks/redux'
import { StartChatDto } from '@/shared/types/chat.interface'
import { User } from '@/shared/types/user.interface'
import { styled } from '@mui/material'
import { FC } from 'react'

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
	users: User[]
}

export const UserCardList: FC<UserCardListProps> = ({ users }) => {
	const dispatch = useAppDispatch()

	const handleClickCard = (data: StartChatDto) => {
		console.log(data)
	}

	return (
		<CardList>
			{[
				...users,
				...users,
				...users,
				...users,
				...users,
				...users,
				...users,
			].map((user) => (
				<UserCard key={user._id} onClickCard={handleClickCard} user={user} />
			))}
		</CardList>
	)
}
