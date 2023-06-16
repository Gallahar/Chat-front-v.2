import { AuthLayout } from '@/entities/auth/ui'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { Home } from '@/pages/Home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
		],
	},
])
