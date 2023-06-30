import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'
import { Message } from '@/shared/types/message.interface'
import { FC, useState } from 'react'
import { selectUser } from '@/entities/user'
import { Avatar, Snackbar, Modal } from '@mui/material'
import { getDate } from '@/shared/lib/utils/getDate'
import type { MouseEvent } from 'react'
import { ContextMenu, likeMessage, useContextMenu } from '@/entities/chat'
import { createPortal } from 'react-dom'
import { Text } from '@/shared/ui'
import { IconHeart } from '@/shared/assets/icons/IconHeart'
import {
	MessageWrapper,
	StyledMessage,
	MessageContent,
	DateWrapper,
	LikeCount,
	StyledDate,
	StyledFile,
	LikeHandler,
} from './Message.style'

interface MessageCardProps {
	message: Message
	avatar: string
}

export const MessageCard: FC<MessageCardProps> = ({ message, avatar }) => {
	const dispatch = useAppDispatch()
	const [messageHovered, setMessageHovered] = useState(false)
	const [snackBarAppearance, setSnackBarAppearance] = useState(false)
	const [modalAvatar, setModalAvatar] = useState(false)
	const userId = useAppSelector(selectUser)._id
	const {
		user: friendId,
		text,
		createdAt,
		attachedFiles,
		likedBy,
		_id: messageId,
	} = message

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

	const handleLike = () => {
		dispatch(likeMessage({ userId, messageId }))
	}

	return (
		<>
			<MessageWrapper
				onMouseEnter={() => setMessageHovered(true)}
				onMouseLeave={() => setMessageHovered(false)}
				onContextMenu={handleContextMenu}
				Position={userId !== friendId}
			>
				{userId !== friendId && (
					<button onClick={handleOpenModal}>
						<Avatar src={avatar} />
					</button>
				)}
				<StyledMessage Position={userId !== friendId}>
					{messageHovered && (
						<LikeHandler onClick={handleLike}>
							<IconHeart fill="#DD2E44" width={15} height={15} />
						</LikeHandler>
					)}
					<MessageContent>{text}</MessageContent>
					<DateWrapper>
						{likedBy.length > 0 && (
							<IconHeart
								onClick={handleLike}
								fill="#DD2E44"
								width={15}
								height={15}
							/>
						)}
						{likedBy.length > 0 && (
							<LikeCount>{likedBy.length}</LikeCount>
						)}
						<StyledDate>{getDate(createdAt, 'time')}</StyledDate>
					</DateWrapper>
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
