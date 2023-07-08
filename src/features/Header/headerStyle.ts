import { mobileXS } from '@/shared/lib/constants/media'
import { ButtonBase, styled } from '@mui/material'

export const StyledHeader = styled('header')<{ isAuth: boolean }>`
	position: relative;
	width: 100%;
	padding: 22px 28px;
	grid-area: header;
	background-color: ${(props) =>
		props.isAuth ? 'transparent' : 'rgba(61, 85, 255, 0.10)'};
	box-shadow: ${(props) =>
		props.isAuth
			? 'none'
			: `0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 4px 0px rgba(255, 255, 255, 0.15) inset`};
	backdrop-filter: ${(props) => (props.isAuth ? 'none' : 'blur(20px)')};
	border-radius: ${(props) => (props.isAuth ? '20px 20px 0 0' : '20px')};
	display: flex;
	justify-content: space-between;
	align-items: center;
	> a {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media ${mobileXS} {
		padding: 16px 20px;

		> a {
			svg {
				width: 97px;
				height: 27px;
			}
		}
		> svg {
			width: 97px;
			height: 27px;
		}
	}
`
export const UserInfoContainer = styled('div')`
	display: flex;
	align-items: center;
	gap: 12px;
	@media ${mobileXS} {
		display: none;
	}
`

export const UserActionWrapper = styled('div')`
	display: flex;
	gap: 30px;

	@media ${mobileXS} {
		flex-direction: row-reverse;
	}
`

export const UserInfoContainerMobile = styled('div')`
	display: none;
	align-items: center;
	flex-direction: row-reverse;
	gap: 10px;
	cursor: pointer;

	@media ${mobileXS} {
		display: flex;
	}
`

export const AstronautButton = styled(ButtonBase)<{ isAuth?: boolean }>`
	@media ${mobileXS} {
		display: ${(props) => (props.isAuth ? 'none' : 'block')};
		> svg {
			width: 28px;
			height: 28px;
		}
	}
`

export const NavButton = styled(ButtonBase)<{ route: boolean }>`
	display: none;

	@media ${mobileXS} {
		display: ${(props) => (props.route ? 'block' : 'none')};
		> svg {
			margin-left: 20px;
		}
	}
`
