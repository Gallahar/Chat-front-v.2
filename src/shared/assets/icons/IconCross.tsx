import { FC, SVGProps } from 'react'

export const IconCross: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M1 1L11 11M21 21L11 11M11 11L1 21L21 1" stroke="#1E1E1E" />
		</svg>
	)
}
