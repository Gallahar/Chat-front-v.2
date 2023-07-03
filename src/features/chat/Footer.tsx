import { selectChatForm } from '@/entities/chatform'
import { useAppSelector } from '@/shared/lib/hooks/redux'
import { styled } from '@mui/material'
import { FC } from 'react'
import { ChatFormSend } from './ChatFormSend'
import { ChatFormEdit } from './ChatFormEdit'

const StyledFooter = styled('footer')`
	grid-area: footer;
	width: 100%;
	padding: 28px;
	border-radius: 0 0 20px 0;
`

export const Footer: FC = () => {
	const mode = useAppSelector(selectChatForm).mode

	console.log(mode)

	return (
		<StyledFooter>
			{mode === 'send' ? (
				<ChatFormSend key={'send'} />
			) : (
				<ChatFormEdit key={'edit'} />
			)}
		</StyledFooter>
	)
}