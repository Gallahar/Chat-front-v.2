import { useRefreshMutation } from '@/entities/auth/api'
import { selectAuth } from '@/entities/auth/model'
import { useAppSelector } from '@/shared/lib/hooks/redux'
import { FullScreenLoader } from '@/shared/ui/Loaders/FullScreenLoader'

import { FC, PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const nav = useNavigate()
	const [refresh, { isLoading }] = useRefreshMutation()
	const isAuth = useAppSelector(selectAuth)

	useEffect(() => {
		refresh()
	}, [])

	if (isLoading) {
		return <FullScreenLoader />
	}

	if (isLoading === false && isAuth === false) {
		nav('/', { replace: true })
	}

	return children
}
