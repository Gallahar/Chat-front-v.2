import { TitleCard } from '@/entities/auth/ui'
import { keyframes, styled } from '@mui/material'
import { FC } from 'react'
import { svgList } from '../config/data'

const appear = keyframes`
	from {
		opacity:0;
     	transform: translateY(100%)}

	to {
		opacity: 1;
		transform: translateY(0);
	}
`

const StyledList = styled('div')<{ hidden: boolean }>`
	margin-top: 70px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(200px, 340px));
	grid-auto-rows: 240px;
	justify-content: space-between;
	align-content: center;
	transition: all 0.2s ease-in-out;
	animation: ${appear} 0.3s ease-in-out;
	transform: translateY(${(props) => (props.hidden ? '100%' : 0)});
	opacity: ${(props) => (props.hidden ? 0 : 1)};
`



interface TitleCardListProps {
	hidden: boolean
}

export const TitleCardsList: FC<TitleCardListProps> = ({ hidden }) => {
	return (
		<StyledList hidden={hidden}>
			{svgList.map(({ title, svg }) => (
				<TitleCard key={title} title={title}>
					{svg}
				</TitleCard>
			))}
		</StyledList>
	)
}
