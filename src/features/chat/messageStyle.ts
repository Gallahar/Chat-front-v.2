import { styled, keyframes } from '@mui/material'
import { mobileXS } from '@/shared/lib/constants/media'

const appear = keyframes`
0%{
	
transform: scale(0);
}
50%{
	
transform: scale(0);
}
100%{
	transform: scale(1);
	
}
`

export const MessageWrapper = styled('div')<{ Position: boolean }>`
	display: flex;
	gap: 12px;
	max-width: 611px;
	justify-self: ${(props) => (props.Position ? 'start' : 'end')};

	> button {
		align-self: start;
	}

	user-select: none;

	@media ${mobileXS} {
		gap: 10px;
		max-width: 250px;
	}
`

export const StyledMessage = styled('div')<{ Position: boolean }>`
	position: relative;
	display: grid;
	grid-template-columns: minmax(min-content, max-content) max-content;
	gap: 5px 20px;
	padding: 7px 12px;
	background: rgba(255, 255, 255, 0.7);
	border-radius: ${(props) =>
		props.Position ? '0px 10px 10px 10px' : '10px 0px 10px 10px'};

	@media ${mobileXS} {
		grid-template-columns: repeat(auto-fill, minmax(50px, 186px));
		padding: 6px 10px;
	}
`

export const MessageContent = styled('p')`
	max-width: 492px;
	word-break: break-word;
	color: var(--text-black);
	font-size: 16px;
	line-height: 150%;
	letter-spacing: 0.02em;

	@media ${mobileXS} {
		max-width: fit-content;
		font-size: 14px;
	}
`

export const DateWrapper = styled('div')`
	position: relative;
	display: flex;
	gap: 3px;
	align-self: end;
	justify-self: end;
	align-items: center;

	> svg {
		cursor: pointer;
		flex-shrink: 0;
	}

	@media ${mobileXS} {
		> svg {
			width: 13px;
			height: 13px;
		}
	}
`

export const LikeCount = styled('span')`
	font-size: 7px;
	position: absolute;
	left: 5px;
	top: 4px;

	@media ${mobileXS} {
		font-size: 5px;
		left: 5px;
		top: 5px;
	}
`

export const StyledDate = styled('span')`
	font-size: 13px;
	line-height: 150%;
	color: rgba(0, 0, 0, 0.5);

	@media ${mobileXS} {
		font-size: 12px;
	}
`

export const StyledFile = styled('img')`
	max-height: 200px;
	max-width: 200px;
	border-radius: 10px;
	@media ${mobileXS} {
		max-width: 150px;
		max-height: 150px;
	}
`

export const LikeHandler = styled('div')`
	position: absolute;
	top: -5px;
	right: -10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	animation: ${appear} 0.5s ease-in;
	border-radius: 50%;
	background-color: var(--bg-white);
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
	padding: 4px;
	transition: transform 0.1s ease-in;

	&:hover {
		transform: scale(1.5);
	}

	@media ${mobileXS} {
		right: -5px;
		padding: 3px;

		> svg {
			width: 13px;
			height: 13px;
		}

		&:hover {
			transform: scale(1.3);
		}
	}
`
