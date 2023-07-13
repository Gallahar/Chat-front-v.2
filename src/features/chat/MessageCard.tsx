import { Message } from '@/shared/types/message.interface'
import { FC } from 'react'
import { Snackbar, Modal, AvatarGroup } from '@mui/material'
import { getDate } from '@/shared/lib/utils/getDate'
import { ContextMenu, useMessageCard } from '@/entities/chat'
import { createPortal } from 'react-dom'
import { CustomAvatar, Text } from '@/shared/ui'
import { IconHeart } from '@/shared/assets/icons/IconHeart'
import {
	MessageWrapper,
	StyledMessage,
	MessageContent,
	DateWrapper,
	StyledDate,
	StyledFile,
	LikeHandler,
	LikeWrapper,
} from './messageStyle'

interface MessageCardProps {
	message: Message
	avatar: string
}

export const MessageCard: FC<MessageCardProps> = ({ message, avatar }) => {
	const {
		user: friendId,
		text,
		createdAt,
		attachedFiles,
		likedBy,
		_id: messageId,
	} = message

	const {
		clicked,
		coordinates,
		handleCloseModal,
		handlers,
		handleLike,
		handleOpenModal,
		modalAvatar,
		setSnackBarAppearance,
		snackBarAppearance,
		userId,
		messageHovered,
	} = useMessageCard(messageId)

	return (
		<>
			<MessageWrapper {...handlers} Position={userId !== friendId}>
				{userId !== friendId && (
					<button onClick={handleOpenModal}>
						<CustomAvatar src={avatar} />
					</button>
				)}
				<StyledMessage Position={userId !== friendId}>
					{messageHovered && (
						<LikeHandler onClick={handleLike}>
							<IconHeart width={15} height={15} />
						</LikeHandler>
					)}
					{attachedFiles.length > 0 &&
						attachedFiles.map((file) => (
							<StyledFile key={file} src={file} />
						))}
					<MessageContent>{text}</MessageContent>
					<DateWrapper>
						{likedBy.length > 0 && (
							<LikeWrapper onClick={handleLike}>
								<IconHeart  />
								<AvatarGroup spacing={'medium'}>
									{likedBy.map(({ avatarUrl, userId }) => (
										<CustomAvatar
											key={userId}
											src={avatarUrl}
										/>
									))}
								</AvatarGroup>
							</LikeWrapper>
						)}
						<StyledDate>{getDate(createdAt, 'time')}</StyledDate>
					</DateWrapper>
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
					<CustomAvatar
						src={avatar}
						sx={{
							width: 384,
							height: 384,
							maxWidth: '100%',
							position: 'absolute',
							top: '40%',
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
