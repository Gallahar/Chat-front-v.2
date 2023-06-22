import { SearchIcon } from '@/shared/assets/icons/SearchIcon'
import { Input } from '@/shared/ui'
import { styled } from '@mui/material'
import { ChangeEvent, FC } from 'react'

const SearchWrapper = styled('div')`
	display: flex;
	align-items: center;
	gap: 12px;
`

interface SearchBarProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar: FC<SearchBarProps> = ({ onChange }) => {
	return (
		<SearchWrapper>
			<Input
				type="text"
				placeholder="Enter username or e-mail"
				onChange={onChange}
				inputVariant="chat"
			/>
			<SearchIcon />
		</SearchWrapper>
	)
}
