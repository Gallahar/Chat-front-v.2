import { styled } from '@mui/material'
import backgroundImage from '@/shared/assets/images/auth/background.png'
import planet from '@/shared/assets/images/auth/planet.png'
import bgCosmic from '@/shared/assets/images/auth/bgСosmic.png'
import { Ellipse } from '@/shared/ui'
import { Outlet } from 'react-router-dom'

const LayoutWrapper = styled('section')`
	overflow-x: hidden;
	position: relative;
	min-height: 100vh;
	height: 100%;
	width: 100%;
	background: url(${backgroundImage}) no-repeat;
	background-size: cover;
	z-index: 1;
`

const Planet = styled('img')`
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto;
	z-index: -1;
	user-select: none;
`

const BgCosmic = styled('img')`
	position: absolute;
	top: 10%;
	right: 20%;
	z-index: -1;
	user-select: none;
`

const Container = styled('div')`
	width: 100%;
	max-width: 1106px;
	margin: 0 auto;
	padding: 20px;
`

export const AuthLayout = () => {
	return (
		<LayoutWrapper>
			<Ellipse size={84} top={10} right={70} />
			<Ellipse size={60} top={1} right={40} />
			<Ellipse size={332} top={-10} right={10} blur={150} />
			<BgCosmic draggable={false} src={bgCosmic} />
			<Container>
				<Outlet />
			</Container>
			<Planet draggable={false} src={planet} />
		</LayoutWrapper>
	)
}
