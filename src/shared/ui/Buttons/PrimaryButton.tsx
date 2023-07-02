import { ButtonBase, styled, ButtonProps } from '@mui/material'
import { FC } from 'react'

const StyledButton = styled(ButtonBase)`
	font-size: 22px;
	border-radius: 20px;
	width: 100%;
	padding: 18px 0;
	color: var(--text-black);
	background-image: var(--gr-primary);
	background-position: center;
	background-size: 100%;
	transition: box-shadow 0.5s ease, background-size 0.5s ease-in-out,
		background-position 0.5s ease-in-out;

	&:hover {
		box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.2);
		background-size: 250%;
		background-position: left;
	}
`

export const PrimaryButton: FC<ButtonProps> = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>
}
