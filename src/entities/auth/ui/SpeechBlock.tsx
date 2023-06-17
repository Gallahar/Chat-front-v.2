import speechImg from '@/shared/assets/images/auth/SpeechImg.png'
import { Ellipse } from '@/shared/ui'
import { styled } from '@mui/material'
import { useLocation } from 'react-router-dom'

const SpeechBlockWrapper = styled('div')<{ animated?: boolean }>`
	display: flex;
	margin-top: ${(props) => (props.animated ? 46 : 58)}px;
	margin-left: ${(props) => (props.animated ? 59 : 78)}px;
	transition: margin 0.3s ease-in-out;
`

const ImageContainer = styled('div')<{ animated?: boolean }>`
	margin-right: ${(props) => (props.animated ? 292 : 211)}px;
	position: relative;
	transition: margin 0.3s ease-in-out;
`

const SpeechImg = styled('img')<{ animated?: boolean }>`
	max-width: ${(props) => (props.animated ? 183 : 244)}px;
	height: auto;
	transition: max-width 0.3s ease-in-out;
`

const Greeting = styled('h2')<{ animated?: boolean }>`
	font-family: 'Neuropol';
	color: #fff;
	line-height: 150%;
	font-size: ${(props) => (props.animated ? 50 : 76)}px;
	transition: font-size 0.3s ease-in-out;
`
const Speech = styled('p')<{ animated?: boolean }>`
	font-family: 'Neuropol';
	color: #fff;
	line-height: 150%;
	max-width: ${(props) => (props.animated ? 235 : 350)}px;
	font-size: ${(props) => (props.animated ? 16 : 24)}px;
	transition: all 0.3s ease-in-out;
`

export const SpeechBlock = () => {
	const { pathname } = useLocation()

	return (
		<SpeechBlockWrapper animated={pathname !== '/'}>
			<ImageContainer animated={pathname !== '/'}>
				<Ellipse opacity={0.16} size={400} right={-50} top={-10} />
				<SpeechImg
					animated={pathname !== '/'}
					src={speechImg}
					alt="speech-img"
				/>
			</ImageContainer>
			<div>
				<Greeting animated={pathname !== '/'}>Hi...</Greeting>
				<Speech animated={pathname !== '/'}>
					Whatever you do, stay always in touch
				</Speech>
			</div>
		</SpeechBlockWrapper>
	)
}
