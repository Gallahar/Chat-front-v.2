import { styled } from '@mui/material'

export const FormWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	justify-items: center;
`

export const StyledForm = styled('form')<{ mode?: 'edit' | 'read' }>`
	padding-top: ${(props) => (props.mode === 'edit' ? 20 : 0)}px;
	display: flex;
	align-items: center;
	gap: 19px;
`

export const EditInfoWrapper = styled('div')`
	left: 0;
	top: -35px;
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-between;
`

export const InfoWrapper = styled('div')`
	width: 100%;
	display: flex;
	gap: 12px;
`

export const StyledText = styled('p')`
	color: var(--text-grey);
	font-size: 15px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	width: calc(100%);
	max-width: 480px;
`

export const AttachmentFilesWrapper = styled('div')<{ files: boolean }>`
	padding-bottom: ${(props) => (props.files ? 20 : 0)}px;
	margin: 0 auto;
	display: grid;
	justify-items: center;
	gap: 5px;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
	grid-auto-rows: 50px;
`

export const AttachmentFilePreview = styled('div')`
	width: 100%;
	height: 100%;
	position: relative;
	> img {
		width: 100%;
		height: 100%;
	}
	> svg {
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		backdrop-filter: blur(5px);
	}

	&:hover {
		> svg {
			opacity: 1;
		}
	}
`
