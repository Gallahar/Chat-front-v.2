import { useAuthForm } from '@/entities/auth/lib/hooks'
import { StyledForm } from '@/entities/auth/ui/Form'
import { Input, Button } from '@/shared/ui'

export const RegistrationForm = () => {
	const { errors, fields, onSubmit } = useAuthForm(true)
	const { email, password, username } = fields

	return (
		<StyledForm onSubmit={onSubmit}>
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
			<Button type="submit">Register</Button>
		</StyledForm>
	)
}
