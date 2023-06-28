import { useAppSelector } from '@/shared/lib/hooks/redux'
import { Message } from '@/shared/types/message.interface'
import { FC } from 'react'
import { selectUser } from '@/entities/user'
import { Avatar, styled } from '@mui/material'
import { getDate } from '@/shared/lib/utils/getDate'

const MessageWrapper = styled('div')<{ Position: boolean }>`
	display: flex;
	gap: 12px;
	max-width: 611px;
	justify-self: ${(props) => (props.Position ? 'start' : 'end')};
`

const StyledMessage = styled('div')<{ Position: boolean }>`
	display: grid;
	grid-template-columns: max-content auto;
	grid-auto-rows: max-content;
	gap: 0 20px;
	padding: 7px 12px;
	background: rgba(255, 255, 255, 0.7);
	border-radius: ${(props) =>
		props.Position ? '0px 10px 10px 10px' : '10px 0px 10px 10px'};
`
const StyledDate = styled('span')`
	font-size: 13px;
	line-height: 150%;
	color: rgba(0, 0, 0, 0.5);
	align-self: end;
`

const MessageContent = styled('p')`
	max-width: 492px;
	word-break: break-word;
	color: var(--text-black);
	font-size: 16px;
	line-height: 150%;
	letter-spacing: 0.02em;
`

const StyledFile = styled('img')`
	max-height: 300px;
	max-width: 300px;
	border-radius: 10px;
`

interface MessageCardProps {
	message: Message
	avatar: string
}

export const MessageCard: FC<MessageCardProps> = ({ message, avatar }) => {
	const currentUserId = useAppSelector(selectUser)._id
	const { user: friendId, text, createdAt, attachedFiles } = message

	return (
		<MessageWrapper Position={currentUserId !== friendId}>
			{currentUserId !== friendId && <Avatar src={avatar} />}
			<StyledMessage Position={currentUserId !== friendId}>
				<MessageContent>{text}</MessageContent>
				<StyledDate>{getDate(createdAt, 'time')}</StyledDate>
				{attachedFiles.length > 0 && (
					<StyledFile src={attachedFiles[0]} />
				)}
			</StyledMessage>
		</MessageWrapper>
	)
}
