import { useAppSelector } from '@/shared/lib/hooks/redux'
import { Message } from '@/shared/types/message.interface'
import { FC, useState } from 'react'
import { selectUser } from '@/entities/user'
import { Avatar, Snackbar, styled, Modal, ButtonBase } from '@mui/material'
import { getDate } from '@/shared/lib/utils/getDate'
import type { MouseEvent } from 'react'
import { ContextMenu, useContextMenu } from '@/entities/chat'
import { createPortal } from 'react-dom'
import { Text } from '@/shared/ui'

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
	gap:  20px;
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
	justify-self: end;
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
	max-height: 200px;
	max-width: 200px;
	border-radius: 10px;
`

interface MessageCardProps {
	message: Message
	avatar: string
}

export const MessageCard: FC<MessageCardProps> = ({ message, avatar }) => {
	const [snackBarAppearance, setSnackBarAppearance] = useState(false)
	const [modalAvatar, setModalAvatar] = useState(false)
	const currentUserId = useAppSelector(selectUser)._id
	const { user: friendId, text, createdAt, attachedFiles } = message

	const { clicked, coordinates, setClicked, setCoordinates } =
		useContextMenu()

	const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()

		setCoordinates({ x: e.clientX, y: e.clientY })
		setClicked(true)
	}

	const handleCloseModal = () => {
		setModalAvatar(false)
	}

	const handleOpenModal = () => {
		setModalAvatar(true)
	}

	return (
		<>
			<MessageWrapper
				onContextMenu={handleContextMenu}
				Position={currentUserId !== friendId}
			>
				{currentUserId !== friendId && (
					<button onClick={handleOpenModal}>
						<Avatar src={avatar} />
					</button>
				)}
				<StyledMessage Position={currentUserId !== friendId}>
					<MessageContent>{text}</MessageContent>
					<StyledDate>{getDate(createdAt, 'time')}</StyledDate>
					{attachedFiles.length > 0 &&
						attachedFiles.map((file) => (
							<StyledFile key={file} src={file} />
						))}
				</StyledMessage>
			</MessageWrapper>
			{clicked &&
				createPortal(
					<ContextMenu
						setSnackBar={setSnackBarAppearance}
						message={message}
						coords={coordinates}
					/>,
					document.getElementById('chat') as HTMLElement
				)}

			{createPortal(
				<Snackbar
					ContentProps={{
						sx: {
							display: 'block',
							textAlign: 'center',
						},
					}}
					onClose={() => setSnackBarAppearance(false)}
					open={snackBarAppearance}
					message={<Text Size={16} text="copied to clipboard" />}
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					autoHideDuration={2000}
				/>,
				document.getElementById('root') as HTMLElement
			)}
			{createPortal(
				<Modal open={modalAvatar} onClose={handleCloseModal}>
					<Avatar
						src={avatar}
						sx={{
							width: 384,
							height: 384,
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					/>
				</Modal>,
				document.getElementById('root') as HTMLElement
			)}
		</>
	)
}
