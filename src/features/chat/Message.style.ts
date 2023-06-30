import { styled } from '@mui/material'

export const MessageWrapper = styled('div')<{ Position: boolean }>`
	display: flex;
	gap: 12px;
	max-width: 611px;
	justify-self: ${(props) => (props.Position ? 'start' : 'end')};
`

export const StyledMessage = styled('div')<{ Position: boolean }>`
	position: relative;
	display: grid;
	grid-template-columns: max-content auto;
	grid-auto-rows: max-content;
	gap: 20px;
	padding: 7px 12px;
	background: rgba(255, 255, 255, 0.7);
	border-radius: ${(props) =>
		props.Position ? '0px 10px 10px 10px' : '10px 0px 10px 10px'};
`

export const MessageContent = styled('p')`
	max-width: 492px;
	word-break: break-word;
	color: var(--text-black);
	font-size: 16px;
	line-height: 150%;
	letter-spacing: 0.02em;
`

export const DateWrapper = styled('div')`
	position: relative;
	display: grid;
	grid-template-columns: auto auto;
	gap: 3px;
	align-self: end;
	justify-self: end;

	> svg {
		cursor: pointer;
	}
`

export const LikeCount = styled('span')`
	font-size: 7px;
	position: absolute;
	left: 6px;
	top: 2px;
`

export const StyledDate = styled('span')`
	font-size: 13px;
	line-height: 150%;
	color: rgba(0, 0, 0, 0.5);
`

export const StyledFile = styled('img')`
	max-height: 200px;
	max-width: 200px;
	border-radius: 10px;
`

export const LikeHandler = styled('div')`
	position: absolute;
	top: -5px;
	right: -10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 50%;
	background-color: var(--bg-white);
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
	padding: 4px;
	transition: transform 0.1s ease-in;

	&:hover {
		transform: scale(1.5);
	}
`
