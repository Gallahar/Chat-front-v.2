import { CrossSvg } from '@/shared/assets/icons/CrossSvg'
import { ButtonBase, styled, ButtonProps } from '@mui/material'
import { FC } from 'react'

const StyledCloseButton = styled(ButtonBase)`
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 100px;
	padding: 13px;
	transition: opacity 0.2s ease-out;
`

export const CloseButton: FC<ButtonProps> = (props) => {
	return (
		<StyledCloseButton {...props}>
			<CrossSvg />
		</StyledCloseButton>
	)
}
