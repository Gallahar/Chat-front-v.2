import { styled } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const StyledFooter = styled('footer')`
	grid-area: footer;
	width: 100%;
	padding: 28px;
	border-radius: 0 0 20px 0;
`

export const Footer: FC<PropsWithChildren> = ({ children }) => {
	return <StyledFooter>{children}</StyledFooter>
}
