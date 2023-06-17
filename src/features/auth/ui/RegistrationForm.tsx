import { useAuthForm } from '@/entities/auth/lib/hooks'
import { StyledForm } from '@/entities/auth/ui/Form'
import { Input, PrimaryButton } from '@/shared/ui'
import { FC } from 'react'


interface RegistrationFormProps {
	closed: boolean
}

export const RegistrationForm: FC<RegistrationFormProps> = ({closed}) => {
	const { errors, fields, onSubmit } = useAuthForm(true)
	const { email, password, username } = fields

	return (
		<StyledForm hidden={closed} onSubmit={onSubmit}>
			<Input
				{...username}
				label="Username"
				error={errors.username?.message}
			/>
			<Input
				{...email}
				label="E-mail address"
				error={errors.email?.message}
			/>
			<Input
				{...password}
				label="Password"
				error={errors.password?.message}
			/>
			<PrimaryButton type="submit">Register</PrimaryButton>
		</StyledForm>
	)
}
