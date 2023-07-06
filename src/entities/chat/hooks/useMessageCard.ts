import type {
	Dispatch,
	MouseEvent as MouseEventReact,
	SetStateAction,
	TouchEvent as TouchEventReact,
} from 'react'
import { useContextMenu, likeMessage } from '@/entities/chat'
import { selectUser } from '@/entities/user'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'
import { getEventCoordinates } from '@/shared/lib/utils/getEventCoordinates'
import { useState } from 'react'

type Coordinates = {
	x: number
	y: number
}

interface UseMessageCardReturn {
	handleContextMenu: (
		e: TouchEventReact<HTMLDivElement> | MouseEventReact<HTMLDivElement>
	) => void
	clicked: boolean
	coordinates: Coordinates
	handleCloseModal: () => void
	handleOpenModal: () => void
	handleLike: () => void
	handleMouseEnter: () => void
	handleMouseLeave: () => void
	modalAvatar: boolean
	setSnackBarAppearance: Dispatch<SetStateAction<boolean>>
	snackBarAppearance: boolean
	userId: string
	messageHovered: boolean
}

export const useMessageCard = (messageId: string): UseMessageCardReturn => {
	const dispatch = useAppDispatch()
	const [messageHovered, setMessageHovered] = useState(false)
	const [snackBarAppearance, setSnackBarAppearance] = useState(false)
	const [modalAvatar, setModalAvatar] = useState(false)
	const userId = useAppSelector(selectUser)._id

	const { clicked, coordinates, setClicked, setCoordinates } =
		useContextMenu()

	const handleContextMenu = (
		e: TouchEventReact<HTMLDivElement> | MouseEventReact<HTMLDivElement>
	) => {
		e.preventDefault()

		setCoordinates(getEventCoordinates(e))
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

	const handleMouseEnter = () => {
		setMessageHovered(true)
	}

	const handleMouseLeave = () => {
		setMessageHovered(false)
	}

	return {
		handleContextMenu,
		clicked,
		coordinates,
		handleCloseModal,
		handleOpenModal,
		handleLike,
		handleMouseEnter,
		handleMouseLeave,
		messageHovered,
		modalAvatar,
		setSnackBarAppearance,
		snackBarAppearance,
		userId,
	}
}
