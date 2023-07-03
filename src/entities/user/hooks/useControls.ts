import { RefObject, useRef } from 'react'
import { getScrollValues } from '../utils/getScrollValues'

export interface HookHandlers {
	onClick: () => void
	onMouseDown: () => void
	onMouseUp: () => void
	onTouchStart: () => void
	onTouchEnd: () => void
}

interface UseControlsReturn {
	listRef: RefObject<HTMLDivElement>
	upHandlers: HookHandlers
	downHandlers: HookHandlers
}

export const useControls = (threshold?: number): UseControlsReturn => {
	const listRef = useRef<HTMLDivElement>(null)
	const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
		undefined
	)

	const onActionStartUp = () => {
		intervalRef.current = setInterval(handleClickUp, threshold ?? 100)
	}

	const onActionStartDown = () => {
		intervalRef.current = setInterval(handleClickDown, threshold ?? 100)
	}

	const onActionEnd = () => {
		clearInterval(intervalRef.current)
	}

	const handleClickDown = () => {
		if (!listRef.current) return
		const { amount, currentScroll, gap } = getScrollValues(
			listRef.current,
			'gap'
		)

		listRef.current?.scrollTo(0, currentScroll + amount + gap)
	}

	const handleClickUp = () => {
		if (!listRef.current) return

		const { amount, currentScroll, gap } = getScrollValues(
			listRef.current,
			'gap'
		)

		listRef.current?.scrollTo(0, currentScroll - (amount + gap))
	}

	return {
		listRef,
		upHandlers: {
			onClick: handleClickUp,
			onMouseDown: onActionStartUp,
			onMouseUp: onActionEnd,
			onTouchStart: onActionStartUp,
			onTouchEnd: onActionEnd,
		},
		downHandlers: {
			onClick: handleClickDown,
			onMouseDown: onActionStartDown,
			onMouseUp: onActionEnd,
			onTouchStart: onActionStartDown,
			onTouchEnd: onActionEnd,
		},
	}
}
