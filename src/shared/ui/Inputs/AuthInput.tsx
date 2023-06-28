import { styled } from '@mui/material'
import { InputHTMLAttributes, forwardRef } from 'react'

const StyledInputWrapper = styled('div')<{ inputVariant?: 'auth' | 'chat' }>`
	width: 100%;
	position: relative;
	border: none;
	padding: ${(props) => (props.inputVariant === 'chat' ? 1 : 3)}px;
	background: var(--gr-border);
	border-radius: ${(props) => (props.inputVariant === 'chat' ? 10 : 20)}px;
`
const StyledLabel = styled('label')<{ labelVariant?: 'auth' | 'chat' }>`
	position: absolute;
	left: 25px;
	padding: 0 10px;
	top: -10px;
	font-size: ${(props) => (props.labelVariant === 'chat' ? 12 : 16)}px;
	line-height: 150%;
	color: ${(props) =>
		props.labelVariant === 'chat' ? 'rgba(255, 255, 255, 0.5)' : '#1e1e1e'};
	background-color: ${(props) =>
		props.labelVariant === 'chat' ? 'rgb(48, 47, 47)' : 'var(--bg-white)'};
`

const StyledInput = styled('input')<{ inputVariant?: 'auth' | 'chat' }>`
	width: 100%;
	color: ${(props) =>
		props.inputVariant === 'chat' ? 'var(--text-white)' : 'inherit '};
	border-radius: ${(props) => (props.inputVariant === 'chat' ? 10 : 16)}px;
	padding: ${(props) =>
		props.inputVariant === 'chat' ? '10px' : '22px 10px'};

	background: ${(props) =>
		props.inputVariant === 'chat' ? 'rgb(48, 47, 47)' : 'var(--bg-white)'};
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
	inputVariant?: 'auth' | 'chat'
}

export const AuthInput = forwardRef<HTMLInputElement, InputProps>(
	({ error, label, inputVariant, ...rest }, ref) => {
		return (
			<StyledInputWrapper inputVariant={inputVariant}>
				{label && (
					<StyledLabel labelVariant={inputVariant}>
						{label}
					</StyledLabel>
				)}
				<StyledInput
					inputVariant={inputVariant}
					autoComplete="off"
					{...rest}
					ref={ref}
				/>
				{error && <StyledError>{error}</StyledError>}
			</StyledInputWrapper>
		)
	}
)
