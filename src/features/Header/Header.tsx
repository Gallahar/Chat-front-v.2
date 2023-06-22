import { HeaderMenu } from './HeaderMenu'
import { Astronaut } from '@/shared/assets/icons/Astronaut'
import { Logo } from '@/shared/assets/icons/logo'
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
} from './Header.style'
import { SettingsForm } from '../user/SettingsForm'

interface HeaderProps {
	headerType: 'auth' | 'chat'
}

export const Header: FC<HeaderProps> = ({ headerType = 'auth' }) => {
	const dispatch = useAppDispatch()
	const [showSettings, setShowSettings] = useState(false)
	const { closed, delayedNavigateHandler, setClosed } = useDelayedNavigate()
	const isAuth = useAppSelector(selectAuth)
	const { avatar, username } = useAppSelector(selectUser)

	const handleClickSettings = () => {
		setClosed(false)
		setShowSettings(true)
	}

	const handleClickLogout = () => {
		setClosed(false)
		dispatch(logout())
	}

	return (
		<StyledHeader HeaderType={headerType}>
			{headerType === 'auth' ? (
				<Link to="/">
					<Logo />
				</Link>
			) : (
				<Logo />
			)}
			<UserActionWrapper>
				{isAuth && (
					<UserInfoContainer>
						<Avatar src={avatar} />
						<Text Size={18} text={username} />
					</UserInfoContainer>
				)}
				<ButtonBase
					onClick={() => {
						if (showSettings) {
							setShowSettings(false)
							return
						}
						setClosed((prev) => !prev)
					}}
				>
					<Astronaut />
				</ButtonBase>
			</UserActionWrapper>
			{closed && (
				<HeaderMenu
					onClickOptionFirst={
						headerType === 'auth'
							? () => delayedNavigateHandler('register')
							: handleClickSettings
					}
					onClickOptionSecond={
						headerType === 'auth'
							? () => delayedNavigateHandler('login')
							: handleClickLogout
					}
					headerType={headerType}
				/>
			)}
			{showSettings && <SettingsForm />}
		</StyledHeader>
	)
}
