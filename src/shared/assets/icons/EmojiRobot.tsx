import { FC, SVGProps } from 'react'

export const EmojiRobot: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.2665 20.6666C22.2665 22.1466 21.0798 23.3333 19.5998 23.3333C18.1198 23.3333 16.9331 22.1466 16.9331 20.6666C16.9331 19.1866 18.1331 18 19.5998 18C21.0665 18 22.2665 19.2 22.2665 20.6666ZM10.2665 18C8.7998 18 7.5998 19.2 7.5998 20.6666C7.5998 22.1333 8.7998 23.3333 10.2665 23.3333C11.7331 23.3333 12.9331 22.1466 12.9331 20.6666C12.9331 19.1866 11.7465 18 10.2665 18ZM29.5998 20V24C29.5998 24.7333 28.9998 25.3333 28.2665 25.3333H26.9331V26.6666C26.9331 28.1466 25.7465 29.3333 24.2665 29.3333H5.5998C4.89256 29.3333 4.21428 29.0523 3.71419 28.5522C3.21409 28.0521 2.93314 27.3739 2.93314 26.6666V25.3333H1.5998C0.86647 25.3333 0.26647 24.7333 0.26647 24V20C0.26647 19.2666 0.86647 18.6666 1.5998 18.6666H2.93314C2.93314 13.5066 7.10647 9.33329 12.2665 9.33329H14.1333V7.63996C13.3333 7.18663 12.2665 6.31996 12.2665 5.33329C12.2665 3.86663 13.4665 2.66663 14.9331 2.66663C16.3998 2.66663 17.5998 3.86663 17.5998 5.33329C17.5998 6.31996 16.5333 7.18663 15.7333 7.63996V9.33329H17.5998C22.7598 9.33329 26.9331 13.5066 26.9331 18.6666H28.2665C28.9998 18.6666 29.5998 19.2666 29.5998 20ZM27.4665 20.6666H25.0665V18.6666C25.0665 14.9866 21.2798 10.8 17.5998 10.8H12.2665C8.58647 10.8 4.93327 14.9866 4.93327 18.6666V20.6666H2.26647V23.3333H4.93327V27.2H25.0665V23.3333H27.4665V20.6666Z"
				fill="white"
			/>
		</svg>
	)
}
