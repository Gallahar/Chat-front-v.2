import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import backgroundImage from '@/shared/assets/images/auth/background.png'
import { Header } from '@/shared/ui'
import { Footer } from '@/entities/chat/ui/Footer'
import { SideBar } from '@/widgets/user/SideBar'
import { ChatForm } from '@/features/chat/ChatForm'

const LayoutWrapper = styled('section')`
	overflow: hidden;
	position: relative;
	min-height: 100vh;
	height: 100%;
	width: 100%;
	background: url(${backgroundImage}) no-repeat;
	background-size: cover;
	background-position: center;
	z-index: 1;
`

const Container = styled('div')`
	width: 100%;
	max-width: 1106px;
	max-height: 680px;
	margin: 0 auto;
	padding: 20px 10px 40px 10px;
`

const Layout = styled('div')`
	min-height: 680px;
	display: grid;
	grid-template:
		'header header header header' max-content
		'sidebar chat chat rightBorder' 1fr
		'sidebar footer footer footer' max-content / 1fr 2fr 24px;
	border-radius: 20px;
	color: #fff;
	background-color: rgba(255, 255, 255, 0.1);
	background-blend-mode: soft-light;
	box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.15),
		inset 0px 0px 68px rgba(255, 255, 255, 0.05);
	backdrop-filter: contrast(120%) brightness(150%) blur(20px);
`

export const ChatLayout = () => {
	return (
		<LayoutWrapper>
			<Container>
				<Layout>
					<Header headerType="chat" />
					<SideBar></SideBar>
					<Outlet />
					<Footer>
						<ChatForm />
					</Footer>
				</Layout>
			</Container>
		</LayoutWrapper>
	)
}
