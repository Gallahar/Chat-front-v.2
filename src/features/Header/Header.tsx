import { HeaderMenu } from './HeaderMenu'
import { IconLogo, IconAstronaut } from '@/shared/assets/icons'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'
import { useDelayedNavigate } from '@/shared/lib/hooks/useDelayedNavigate'
import { Avatar } from '@mui/material'
import { ButtonBase } from '@mui/material'
import { Text } from '../../shared/ui/Typography/Text'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout, selectAuth } from '@/entities/auth/model'
import { selectUser } from '@/entities/user/model'
import {
	StyledHeader,
	UserActionWrapper,
	UserInfoContainer,
} from './header.style.ts'
import { SettingsForm } from '../user/SettingsForm'

export const Header: FC = () => {
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
			<UserInfoContainer>
				<Avatar src={avatar} />
				<Text Size={18} text={username} />
			</UserInfoContainer>
		)

	return (
		<StyledHeader isAuth={isAuth}>
			{renderLogo()}
			<UserActionWrapper>
				{renderUser()}
				<ButtonBase onClick={toggleMenu}>
					<IconAstronaut />
				</ButtonBase>
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
			{showSettings && <SettingsForm />}
		</StyledHeader>
	)
}
