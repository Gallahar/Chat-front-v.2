import { styled, keyframes, ButtonBase } from '@mui/material'
import { FC } from 'react'

const appear = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1
}`

const MenuWrapper = styled('div')<{ headerType: 'auth' | 'chat' }>`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	right: ${(props) => (props.headerType === 'chat' ? 30 : 0)}px;
	bottom: -145px;
	position: absolute;
	color: #fff;
	gap: 18px;
	background-color: rgba(255, 255, 255, 0.1);
	background-blend-mode: soft-light;
	box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.15),
		inset 0px 0px 68px rgba(255, 255, 255, 0.05);
	backdrop-filter: contrast(120%) brightness(150%) blur(20px);
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
	onClickOptionFirst: () => void
	onClickOptionSecond: () => void
	headerType?: 'auth' | 'chat'
}

export const HeaderMenu: FC<HeaderMenuProps> = ({
	headerType = 'auth',
	onClickOptionFirst,
	onClickOptionSecond,
}) => {
	return (
		<MenuWrapper headerType={headerType}>
			<ButtonBase onClick={onClickOptionFirst}>
				{headerType === 'auth' ? 'Sign in' : 'Settings'}
			</ButtonBase>
			<ButtonBase onClick={onClickOptionSecond}>
				{headerType === 'auth' ? 'Sign up' : 'Log out'}
			</ButtonBase>
		</MenuWrapper>
	)
}
