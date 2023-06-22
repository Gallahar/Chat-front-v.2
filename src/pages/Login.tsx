import { useDelayedNavigate } from '@/shared/lib/hooks/useDelayedNavigate'
import { LoginForm } from '@/features/auth'
import { CloseButton } from '@/shared/ui/Buttons/CloseButton'
import { Box } from '@mui/material'

export const Login = () => {
	const { closed, delayedNavigateHandler } = useDelayedNavigate()

	return (
		<>
			<LoginForm hidden={closed} />
			<Box
				component="div"
				sx={{ width: '100%', marginTop: '20px', textAlign: 'center' }}
			>
				<CloseButton
					sx={{ opacity: closed ? 0 : 1 }}
					onClick={() => delayedNavigateHandler('/', 300)}
				/>
			</Box>
		</>
	)
}
