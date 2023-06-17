import { TitleCard } from '@/entities/auth/ui'
import { SearchGradient } from '@/shared/assets/icons/SearchGradient'
import { SignUpGradient } from '@/shared/assets/icons/SignUpGradient'
import { SocialGradient } from '@/shared/assets/icons/SocialGradient'
import { styled } from '@mui/material'
import { FC } from 'react'

const StyledList = styled('div')<{ hidden: boolean }>`
	margin-top: 70px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(200px, 340px));
	grid-auto-rows: 240px;
	justify-content: space-between;
	align-content: center;
	transition: all 0.2s ease-in-out;
	transform: translateY(${(props) => (props.hidden ? '100%' : 0)});
	opacity: ${(props) => (props.hidden ? 0 : 1)};
`

const list = [
	{ title: 'Sign up fast', svg: <SignUpGradient /> },
	{ title: 'Comfortable search', svg: <SearchGradient /> },
	{ title: 'Free social', svg: <SocialGradient /> },
]

interface TitleCardListProps {
	hidden: boolean
}

export const TitleCardsList: FC<TitleCardListProps> = ({ hidden }) => {
	return (
		<StyledList hidden={hidden}>
			{list.map(({ title, svg }) => (
				<TitleCard key={title} title={title}>
					{svg}
				</TitleCard>
			))}
		</StyledList>
	)
}
