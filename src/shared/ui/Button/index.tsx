import { ButtonBase, styled, ButtonProps } from '@mui/material'
import { FC } from 'react'

const StyledButton = styled(ButtonBase)`
	font-size: 22px;
	border-radius: 20px;
	width: 100%;
	padding: 18px 0;
	background-image: linear-gradient(90deg, #00f0ff 0%, #00ff1a 100%);
`

export const Button: FC<ButtonProps> = ({ children,...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>
}
