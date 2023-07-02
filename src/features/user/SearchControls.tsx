import { styled } from '@mui/material'
import { IconControlDown, IconControlUp } from '@/shared/assets/icons'
import { FC } from 'react'
import { HookHandlers } from '@/entities/user/hooks/useControls'

const ControlsWrapper = styled('div')`
	display: flex;
	gap: 12px;
`

const StyledControl = styled('button')`
	> svg {
		> path,
		rect {
			transition: stroke 0.2s ease-in-out;
		}
	}

	&:hover {
		> svg {
			> path {
				stroke: #00f0ff;
			}
			> rect {
				stroke: #00ff1a;
			}
		}
	}
`

interface SearchControlsProps {
	upHandlers: HookHandlers
	downHandlers: HookHandlers
}

export const SearchControls: FC<SearchControlsProps> = ({
	upHandlers,
	downHandlers,
}) => {
	return (
		<ControlsWrapper>
			<StyledControl {...upHandlers}>
				<IconControlUp />
			</StyledControl>
			<StyledControl {...downHandlers}>
				<IconControlDown />
			</StyledControl>
		</ControlsWrapper>
	)
}
