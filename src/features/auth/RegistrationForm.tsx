import { useAuthForm } from '@/entities/auth/lib/hooks'
import { StyledForm } from '@/entities/auth/ui/Form'
import { AuthInput, PrimaryButton } from '@/shared/ui'
import { ProcessLoader } from '@/shared/ui/Loaders/ProcessLoader'
import { FC } from 'react'

interface RegistrationFormProps {
	hidden: boolean
}

export const RegistrationForm: FC<RegistrationFormProps> = ({ hidden }) => {
	const { errors, fields, onSubmit, loadings } = useAuthForm(true)
	const { email, password, username } = fields
	const { registerLoading } = loadings

	return (
		<StyledForm hidden={hidden} onSubmit={onSubmit}>
			<AuthInput
				{...username}
				label="Username"
				error={errors.username?.message}
			/>
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
			<PrimaryButton disabled={registerLoading} type="submit">
				{registerLoading ? <ProcessLoader /> : 'Register'}
			</PrimaryButton>
		</StyledForm>
	)
}
