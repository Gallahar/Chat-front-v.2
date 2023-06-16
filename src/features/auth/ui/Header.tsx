import { Astronaut } from '@/shared/assets/icons/Astronaut'
import { Logo } from '@/shared/assets/icons/logo'
import { styled } from '@mui/material'
import { ButtonBase } from '@mui/material'
import { Link } from 'react-router-dom'

const StyledHeader = styled('header')`
	margin-top: 10px;
	width: 100%;
	padding: 24px 28px;
	background: rgba(255, 255, 255, 0.1);
	background-blend-mode: soft-light;
	box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.15),
		inset 0px 0px 68px rgba(255, 255, 255, 0.05);
	backdrop-filter: blur(20px);
	border-radius: 20px;
	display: flex;
	justify-content: space-between;
	> a {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`



export const Header = () => {
	return (
		<StyledHeader>
			<Link to="/">
				<Logo />
			</Link>
			<ButtonBase>
				<Astronaut />
			</ButtonBase>
		</StyledHeader>
	)
}
