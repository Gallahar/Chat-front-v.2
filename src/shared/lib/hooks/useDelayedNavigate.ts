import { Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface useCloseFormReturn {
	closed: boolean
	delayedNavigateHandler: (path: string, delay?: number) => void
	setClosed: Dispatch<SetStateAction<boolean>>
}

export const useDelayedNavigate = (): useCloseFormReturn => {
	const [closed, setClosed] = useState(false)
	const nav = useNavigate()

	const delayedNavigateHandler = (path: string, delay?: number) => {
		setClosed(false)
		setTimeout(() => {
			nav(path)
		}, delay || 0)
	}

	return { closed, delayedNavigateHandler, setClosed }
}
