import { styled } from '@mui/material'

interface EllipseProps {
	size: number
	top?: number
	right?: number
	blur?: number
}

export const Ellipse = styled('div')<EllipseProps>`
	background: rgba(116, 130, 255, 0.6);
	filter: blur(${(props) => props.blur||30}px);
	border-radius: 100px;
	position: absolute;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	top: ${(props) => props.top}%;
	right: ${(props) => props.right}%;
	z-index: -1;
`
