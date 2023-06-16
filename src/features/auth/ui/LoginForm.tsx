import { useAuthForm } from '@/entities/auth/lib/hooks'
import { StyledForm } from '@/entities/auth/ui/Form'
import { Button, Input } from '@/shared/ui'

export const LoginForm = () => {
	const { fields, errors, onSubmit } = useAuthForm()
	const { email, password } = fields

	return (
		<StyledForm onSubmit={onSubmit}>
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
			<Button type="submit">Log in</Button>
		</StyledForm>
	)
}
