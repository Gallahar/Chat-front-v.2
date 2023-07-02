import { UserCard } from '@/entities/user/ui/UserCard'
import { UserData } from '@/shared/types/user.interface'
import { styled } from '@mui/material'
import { forwardRef} from 'react'

const CardList = styled('div')`
	max-height: 400px;
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: max-content;
	gap: 29px;
	overflow-y: auto;
	overflow-x: hidden;
`

interface UserCardListProps {
	users: UserData[]
	
}

export const UserCardList = forwardRef<HTMLDivElement, UserCardListProps>(
	({ users}, ref) => {

	

		return (
			<CardList ref={ref}>
				{users.map((userData) => (
					<UserCard key={userData._id} userData={userData} />
				))}
			</CardList>
		)
	}
)
