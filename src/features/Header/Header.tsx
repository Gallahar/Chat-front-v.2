import { HeaderMenu } from './HeaderMenu'
import { IconLogo, IconAstronaut } from '@/shared/assets/icons'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'
import { useDelayedNavigate } from '@/shared/lib/hooks/useDelayedNavigate'
import { Avatar } from '@mui/material'
import { Text } from '../../shared/ui/Typography/Text'
import { FC, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { logout, selectAuth } from '@/entities/auth/model'
import { selectUser } from '@/entities/user/model'
import {
	AstronautButton,
	NavButton,
	StyledHeader,
	UserActionWrapper,
	UserInfoContainer,
	UserInfoContainerMobile,
} from './headerStyle'
import { SettingsForm } from '../user/SettingsForm'
import { IconBack } from '@/shared/assets/icons/IconBack'

export const Header: FC = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const [showSettings, setShowSettings] = useState(false)
	const { closed, delayedNavigateHandler, setClosed } = useDelayedNavigate()
	const isAuth = useAppSelector(selectAuth)
	const { avatar, username } = useAppSelector(selectUser)

	const toggleMenu = () => {
		if (showSettings) {
			return setShowSettings(false)
		}
		setClosed((prev) => !prev)
	}

	const handleRegisterClick = () => {
		delayedNavigateHandler('register')
	}

	const handleLoginClick = () => {
		delayedNavigateHandler('login')
	}

	const handleToggleSettings = () => {
		setClosed(false)
		setShowSettings((prev) => !prev)
	}

	const handleLogout = () => {
		setClosed(false)
		dispatch(logout())
	}

	const renderLogo = () =>
		isAuth ? (
			<IconLogo />
		) : (
			<Link to="/">
				<IconLogo />
			</Link>
		)

	const renderUser = () =>
		isAuth && (
			<>
				<UserInfoContainer>
					<Avatar src={avatar} />
					<Text Size={18} text={username} />
				</UserInfoContainer>
				<UserInfoContainerMobile onClick={toggleMenu}>
					<Avatar src={avatar} />
					<Text Size={18} text={username} />
				</UserInfoContainerMobile>
			</>
		)

	return (
		<StyledHeader isAuth={isAuth}>
			{renderLogo()}
			<NavButton
				onClick={() => delayedNavigateHandler('/chat', 0, 'mobile')}
				route={id !== undefined}
			>
				<IconBack />
			</NavButton>
			<UserActionWrapper>
				{renderUser()}
				<AstronautButton isAuth={isAuth} onClick={toggleMenu}>
					<IconAstronaut />
				</AstronautButton>
			</UserActionWrapper>
			{closed && (
				<HeaderMenu
					handleLoginClick={handleLoginClick}
					handleRegisterClick={handleRegisterClick}
					handleToggleSettings={handleToggleSettings}
					handleLogout={handleLogout}
					isAuth={isAuth}
				/>
			)}
			{showSettings && (
				<SettingsForm handleToggleSettings={handleToggleSettings} />
			)}
		</StyledHeader>
	)
}
