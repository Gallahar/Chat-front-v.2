import { styled } from '@mui/material'

export const StyledHeader = styled('header')<{ isAuth: boolean }>`
	position: relative;
	width: 100%;
	padding: 28px;
	grid-area: header;
	background-color: ${(props) =>
		props.isAuth ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
	background-blend-mode: soft-light;
	box-shadow: ${(props) =>
		props.isAuth
			? 'none'
			: `inset 0px 4px 4px rgba(255, 255, 255, 0.15),
		inset 0px 0px 68px rgba(255, 255, 255, 0.05)`};
	backdrop-filter: ${(props) =>
		props.isAuth ? 'none' : ' contrast(120%) brightness(150%) blur(20px)'};
	border-radius: ${(props) => (props.isAuth ? '20px 20px 0 0' : '20px')};
	display: flex;
	justify-content: space-between;
	> a {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
export const UserInfoContainer = styled('div')`
	display: flex;
	align-items: center;
	gap: 12px;
`

export const UserActionWrapper = styled('div')`
	display: flex;
	gap: 30px;
`
