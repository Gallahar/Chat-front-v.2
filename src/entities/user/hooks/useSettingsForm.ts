import { useAppSelector } from '@/shared/lib/hooks/redux'
import { ChangeEvent, FormEvent, useState } from 'react'
import { selectUser } from '../model'
import {
	useUpdateAvatarMutation,
	useUpdateUsernameMutation,
} from '../api/userApi'

interface SettingsFormReturn {
	username: string
	onChangeUserName: (e: ChangeEvent<HTMLInputElement>) => void
	error: string
	onSubmit: (e:FormEvent<HTMLFormElement>) => Promise<void>
}

export const useSettingsForm = (avatar: string): SettingsFormReturn => {
	const [updateAvatar] = useUpdateAvatarMutation()
	const [updateUsername] = useUpdateUsernameMutation()
	const initialName = useAppSelector(selectUser).username
	const [error, setError] = useState('')
	const [username, setUsername] = useState(initialName)

	const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}

	const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError('')
		if ( username.length < 4) {
			return setError('username should be at least 4 characters')
		}

		try {
			await Promise.all([
				updateAvatar({ avatar }),
				updateUsername({ username }),
			])
		} catch (err) {
			console.log(err)
		}
	}

	return { username, error, onSubmit, onChangeUserName }
}