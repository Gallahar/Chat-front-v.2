import { Header } from '@/features/auth/ui/Header'
import { LoginForm } from '@/features/auth/ui/LoginForm'
import { RegistrationForm } from '@/features/auth/ui/RegistrationForm'
import { CardsList } from '@/widgets/Auth/ui/CardsList'

export const Home = () => {
	return (
		<>
			<Header />
			<LoginForm />
			<RegistrationForm/>
			<CardsList />
		</>
	)
}
