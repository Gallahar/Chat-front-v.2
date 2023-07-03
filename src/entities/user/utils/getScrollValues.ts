interface GetScrollValuesReturn {
	currentScroll: number
	gap: number
	amount: number
}

export const getScrollValues = (
	refElement: HTMLDivElement,
	property: string
): GetScrollValuesReturn => {
	const amount = refElement.firstElementChild?.clientHeight ?? 0
	const gap = +window
		.getComputedStyle(refElement)
		.getPropertyValue(property)
		.replace(/[^0-9]*/gi, '')

	const currentScroll = refElement.scrollTop

	console.log(amount, gap, currentScroll)

	return { amount, gap, currentScroll }
}
