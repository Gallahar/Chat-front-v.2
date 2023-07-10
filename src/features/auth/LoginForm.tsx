import { useAuthForm } from '@/entities/auth/lib/hooks'
import { StyledForm } from '@/entities/auth/ui/Form'
import { PrimaryButton, AuthInput } from '@/shared/ui'
import { ProcessLoader } from '@/shared/ui/Loaders/ProcessLoader'
import { FC } from 'react'

interface LoginFormProps {
	hidden: boolean
}

export const LoginForm: FC<LoginFormProps> = ({ hidden }) => {
	const { fields, errors, onSubmit, loadings } = useAuthForm()
	const { email, password } = fields
	const { loginLoading } = loadings

	return (
		<StyledForm hidden={hidden} onSubmit={onSubmit}>
			<AuthInput
				{...email}
				label="E-mail address"
				error={errors.email?.message}
			/>
			<AuthInput
				{...password}
				label="Password"
				error={errors.password?.message}
			/>
			<PrimaryButton disabled={loginLoading} type="submit">
				{loginLoading ? <ProcessLoader/> : 'Log in'}
			</PrimaryButton>
		</StyledForm>
	)
}
