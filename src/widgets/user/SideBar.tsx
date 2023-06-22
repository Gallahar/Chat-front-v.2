import { useFindUsersQuery } from '@/entities/user/api/userApi'
import { SearchBar } from '@/features/user/SearchBar'
import { UserCardList } from '@/features/user/UserCardList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { Box, CircularProgress, styled } from '@mui/material'
import { ChangeEvent, FC, PropsWithChildren, useState } from 'react'

const StyledSideBar = styled('aside')`
	grid-area: sidebar;
	padding: 0 28px 28px;
	grid-template: max-content 1fr max-content / 1fr;
`

export const SideBar: FC<PropsWithChildren> = ({ children }) => {
	const [value, setValue] = useState('')
	const debouncedValue = useDebounce(value)
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const { data, isLoading } = useFindUsersQuery({
		value: debouncedValue,
		param: 'username',
	})

	return (
		<StyledSideBar>
			<SearchBar onChange={handleChange} />
			{isLoading && (
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<CircularProgress sx={{ color: '#00F0FF' }} />
				</Box>
			)}
			{data && <UserCardList users={data} />}
		</StyledSideBar>
	)
}
