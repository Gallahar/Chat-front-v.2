import { TitleCard } from '@/entities/auth/ui'
import { SearchGradient } from '@/shared/assets/icons/SearchGradient'
import { SignUpGradient } from '@/shared/assets/icons/SignUpGradient'
import { SocialGradient } from '@/shared/assets/icons/SocialGradient'
import { styled } from '@mui/material'

const StyledList = styled('div')`
	margin-top: 70px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(200px, 340px));
	grid-auto-rows: 240px;
	justify-content: space-between;
	align-content: center;
`

const list = [
	{ title: 'Sign up fast', svg: <SignUpGradient /> },
	{ title: 'Comfortable search', svg: <SearchGradient /> },
	{ title: 'Free social', svg: <SocialGradient /> },
]

export const CardsList = () => {
	return (
		<StyledList>
			{list.map(({ title, svg }) => (
				<TitleCard key={title} title={title}>
					{svg}
				</TitleCard>
			))}
		</StyledList>
	)
}
