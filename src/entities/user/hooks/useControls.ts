import { RefObject, useRef } from 'react'
import { getScrollValues } from '../utils/getScrollValues'
import type { MouseEvent as ReactMouseEvent } from 'react'

export interface HookHandlers {
	onClick: () => void
	onMouseDown: () => void
	onMouseUp: () => void
	onTouchStart: () => void
	onTouchEnd: () => void
	onContextMenu: (e: ReactMouseEvent<HTMLButtonElement>) => void
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
	const animationFrameRef =
		useRef<ReturnType<typeof requestAnimationFrame>>(0)

	const onActionStartUp = () => {
		intervalRef.current = setInterval(
			() =>
				(animationFrameRef.current =
					requestAnimationFrame(handleClickUp)),
			threshold ?? 100
		)
	}

	const onActionStartDown = () => {
		intervalRef.current = setInterval(
			() =>
				(animationFrameRef.current =
					requestAnimationFrame(handleClickDown)),
			threshold ?? 100
		)
	}

	const onActionEnd = () => {
		clearInterval(intervalRef.current)
		cancelAnimationFrame(animationFrameRef.current)
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

	const handleContextMenu = (e: ReactMouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
	}

	return {
		listRef,
		upHandlers: {
			onClick: handleClickUp,
			onMouseDown: onActionStartUp,
			onMouseUp: onActionEnd,
			onTouchStart: onActionStartUp,
			onTouchEnd: onActionEnd,
			onContextMenu: handleContextMenu,
		},
		downHandlers: {
			onClick: handleClickDown,
			onMouseDown: onActionStartDown,
			onMouseUp: onActionEnd,
			onTouchStart: onActionStartDown,
			onTouchEnd: onActionEnd,
			onContextMenu: handleContextMenu,
		},
	}
}
