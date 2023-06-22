import { useAuthForm } from '@/entities/auth/lib/hooks'
import { StyledForm } from '@/entities/auth/ui/Form'
import { PrimaryButton, Input } from '@/shared/ui'
import { FC } from 'react'

interface LoginFormProps {
	hidden: boolean
}

export const LoginForm: FC<LoginFormProps> = ({ hidden }) => {
	const { fields, errors, onSubmit } = useAuthForm()
	const { email, password } = fields

	return (
		<StyledForm hidden={hidden} onSubmit={onSubmit}>
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
			<PrimaryButton type="submit">Log in</PrimaryButton>
		</StyledForm>
	)
}
