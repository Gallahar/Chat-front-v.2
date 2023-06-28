import { styled } from '@mui/material'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

const StyledButton = styled('button')<{ isAuth?: boolean }>`
	width: 100%;
	position: relative;
	font-size: ${(props) => (props.isAuth ? 15 : 22)}px;
	padding: ${(props) => (props.isAuth ? 9 : 18)}px;

	background-clip: padding-box;
	display: inline-block;
	

	&::before {
		width: 100%;
		padding: ${(props) => (props.isAuth ? 2 : 3)}px;
		position: absolute;
		inset: 0;
		background: var(--gr-primary);
		-webkit-mask: linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		content: '';
		z-index: 1;
		border-radius: ${(props) => (props.isAuth ? 10 : 20)}px;
	}
`

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isAuth?: boolean
	children: ReactNode
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
	children,
	isAuth,
	...rest
}) => {
	return (
		<StyledButton isAuth={isAuth} {...rest}>
			{children}
		</StyledButton>
	)
}
