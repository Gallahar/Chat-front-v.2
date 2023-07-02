import { RefObject, useRef, useState } from 'react'

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
	const [longPress, setLongPress] = useState(false)
	const listRef = useRef<HTMLDivElement>(null)
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
		undefined
	)

	const startPressTimer = () => {
		timeoutRef.current = setTimeout(
			() => setLongPress(true),
			threshold ?? 300
		)
	}

	const onActionStart = () => {
		startPressTimer()
	}

	const onActionEnd = () => {
		clearTimeout(timeoutRef.current)
	}

	const handleClickDown = () => {
		if (!listRef.current) return
		if (longPress) {
			listRef.current?.lastElementChild?.scrollIntoView()
			return setLongPress(false)
		}
		const amount = listRef.current?.firstElementChild?.clientHeight ?? 0
		const gap = window
			.getComputedStyle(listRef.current)
			.getPropertyValue('gap')
			.slice(0, 2)

		const currentScroll = listRef.current?.scrollTop ?? 0
		listRef.current?.scrollTo(0, currentScroll + amount + Number(gap))
	}

	const handleClickUp = () => {
		if (!listRef.current) return

		if (longPress) {
			listRef.current?.firstElementChild?.scrollIntoView()
			return setLongPress(false)
		}
		const amount = listRef.current?.firstElementChild?.clientHeight ?? 0
		const gap = window
			.getComputedStyle(listRef.current)
			.getPropertyValue('gap')
			.slice(0, 2)
		const currentScroll = listRef.current?.scrollTop ?? 0
		listRef.current?.scrollTo(0, currentScroll - (amount + Number(gap)))
	}

	return {
		listRef,
		upHandlers: {
			onClick: handleClickUp,
			onMouseDown: onActionStart,
			onMouseUp: onActionEnd,
			onTouchStart: onActionStart,
			onTouchEnd: onActionStart,
		},
		downHandlers: {
			onClick: handleClickDown,
			onMouseDown: onActionStart,
			onMouseUp: onActionEnd,
			onTouchStart: onActionStart,
			onTouchEnd: onActionEnd,
		},
	}
}
