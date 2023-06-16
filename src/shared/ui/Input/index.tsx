import { styled } from '@mui/material'
import { FC, ForwardedRef, HTMLAttributes, forwardRef } from 'react'

const StyledInputWrapper = styled('div')`
	width: 100%;
	position: relative;
	border: none;
	padding: 3px;
	background: linear-gradient(to right, #00f0ff , #00ff1a );
	border-radius: 20px;
`
const StyledLabel = styled('label')`
	position: absolute;
	left: 25px;
	padding: 0 10px;
	top: -10px;
	font-size: 16px;
	line-height: 150%;
	color: #1e1e1e;
	background-color: #fff;
`

const StyledInput = styled('input')`
	width: 100%;
	border-radius: 16px;
	padding: 22px 10px;
`

const StyledError = styled('p')`
	position: absolute;
	color: #ff0000a0;
	padding-top: 5px;
	font-size: 12px;
`

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
	ref?: ForwardedRef<HTMLInputElement>
}

export const Input: FC<InputProps> = forwardRef(function Input(
	{ error, label, ...rest },
	ref
) {
	return (
		<StyledInputWrapper>
			{label && <StyledLabel>{label}</StyledLabel>}
			<StyledInput {...rest} ref={ref} />
			{error && <StyledError>{error}</StyledError>}	
		</StyledInputWrapper>
	)
})
