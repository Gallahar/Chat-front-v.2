import { useAppSelector } from '@/shared/lib/hooks/redux'
import { User } from '@/shared/types/user.interface'
import { Avatar, Box, Typography, styled } from '@mui/material'
import { FC } from 'react'
import { selectUser } from '../model'
import { Text } from '@/shared/ui/Typography/Text'
import { StartChatDto } from '@/shared/types/chat.interface'

const CardWrapper = styled('div')`
	display: grid;
	grid-template-columns: 58px 175px auto;
	grid-template-rows: 1fr;
	gap: 12px;
	cursor: pointer;
`

interface UserCardProps {
	user: User
	onClickCard: (param: StartChatDto) => void
}

export const UserCard: FC<UserCardProps> = ({ user, onClickCard }) => {
	const { _id: fromUserId } = useAppSelector(selectUser)
	const { _id: toUserId, avatar, username } = user

	return (
		<CardWrapper onClick={() => onClickCard({ fromUserId, toUserId })}>
			<Avatar sx={{ width: '58px', height: '58px' }} src={avatar} />
			<Box
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
				}}
			>
				<Text Size={18} text={username} />
				<Typography
					sx={{
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						margin: 0,
					}}
					paragraph={true}
				>
					{'dfdsafdsafsafdsafdsafsdafsadfsdafasdasfasdfadfsadfsagas'}
				</Typography>
			</Box>
			<p>10:19</p>
		</CardWrapper>
	)
}
