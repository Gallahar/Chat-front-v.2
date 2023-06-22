import { ButtonBase, styled, ButtonProps } from '@mui/material'
import { FC } from 'react'

const StyledButton = styled(ButtonBase)`
	font-size: 22px;
	border-radius: 20px;
	width: 100%;
	padding: 18px 0;
	color: var(--text-black);
	background-image: var(--gr-primary);
`

export const PrimaryButton: FC<ButtonProps> = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>
}
