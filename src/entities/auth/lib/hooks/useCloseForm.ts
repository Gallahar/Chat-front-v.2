import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface useCloseFormReturn {
	closed: boolean
	handleClose: () => void
}

export const useCloseForm = (): useCloseFormReturn => {
	const [closed, setClosed] = useState(false)
	const nav = useNavigate()

	const handleClose = () => {
		setClosed(true)
		setTimeout(() => {
			nav('/')
		}, 300)
	}

	return { closed, handleClose }
}
