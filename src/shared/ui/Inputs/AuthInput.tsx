import { styled } from '@mui/material'
import { InputHTMLAttributes, forwardRef } from 'react'

const StyledInputWrapper = styled('div')`
	width: 100%;
	position: relative;
	border: none;
	padding: 3px;
	background: var(--gr-border);
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
	background-color: var(--bg-white);
`

const StyledInput = styled('input')`
	width: 100%;
	color: inherit;
	border-radius: 16px;
	padding: 22px 10px;

	background: var(--bg-white);
`

const StyledError = styled('p')`
	position: absolute;
	color: var(--text-danger);
	padding-top: 5px;
	font-size: 10px;
`

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
}

export const AuthInput = forwardRef<HTMLInputElement, InputProps>(
	({ error, label, ...rest }, ref) => {
		return (
			<StyledInputWrapper>
				{label && <StyledLabel>{label}</StyledLabel>}
				<StyledInput autoComplete="off" {...rest} ref={ref} />
				{error && <StyledError>{error}</StyledError>}
			</StyledInputWrapper>
		)
	}
)
