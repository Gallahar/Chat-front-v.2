import { styled, keyframes, ButtonBase } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const appear = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1
}`

const MenuWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	right: 0;
	bottom: -145px;
	position: absolute;
	color: #fff;
	gap: 18px;
	background: rgba(255, 255, 255, 0.1);
	background-blend-mode: soft-light;
	box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.15),
		inset 0px 0px 68px rgba(255, 255, 255, 0.05);
	backdrop-filter: blur(20px);
	border-radius: 20px;
	width: 100%;
	max-width: 200px;
	padding: 28px 0;
	animation: ${appear} 0.2s ease-in;
	> button {
		font-size: 22px;
		line-height: 150%;
	}
`

interface HeaderMenuProps {
	toLogin: () => void
	toRegister: () => void
}

export const HeaderMenu: FC<HeaderMenuProps> = ({toLogin,toRegister}) => {
	return (
		<MenuWrapper>
			<ButtonBase onClick={toLogin}>Log in</ButtonBase>
			<ButtonBase onClick={toRegister}>Register</ButtonBase>
		</MenuWrapper>
	)
}
