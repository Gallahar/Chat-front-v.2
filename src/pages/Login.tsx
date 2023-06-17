import { useCloseForm } from '@/entities/auth/lib/hooks'
import { LoginForm } from '@/features/auth/ui'
import { CloseButton } from '@/shared/ui/Buttons/CloseButton'
import { Box } from '@mui/material'

export const Login = () => {
	const { closed, handleClose } = useCloseForm()

	return (
		<>
			<LoginForm closed={closed} />
			<Box
				component="div"
				sx={{ width: '100%', marginTop: '20px', textAlign: 'center' }}
			>
				<CloseButton sx={{ opacity: closed ?0:1}} onClick={handleClose} />
			</Box>
		</>
	)
}
