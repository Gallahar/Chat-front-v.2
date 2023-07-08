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

export const useControls = (): UseControlsReturn => {
	const listRef = useRef<HTMLDivElement>(null)
	const animationFrameRef =
		useRef<ReturnType<typeof requestAnimationFrame>>(0)

	const onActionStartUp = () => {
		handleClickUp()
		animationFrameRef.current = requestAnimationFrame(onActionStartUp)
	}

	const onActionStartDown = () => {
		handleClickDown()
		animationFrameRef.current = requestAnimationFrame(onActionStartDown)
	}

	const onActionEnd = () => {
		cancelAnimationFrame(animationFrameRef.current)

		console.log(animationFrameRef.current)
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
