import { styled } from '@mui/material'
import { IconControlDown, IconControlUp } from '@/shared/assets/icons'
import { FC } from 'react'
import { HookHandlers } from '@/entities/user/hooks/useControls'
import { mobileXS } from '@/shared/lib/constants/media'

const ControlsWrapper = styled('div')`
	display: flex;
	gap: 12px;

	@media ${mobileXS} {
		gap: 10px;
	}
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

	@media ${mobileXS} {
		> svg {
			width: 36px;
			height: 36px;
		}
	}
`

interface SearchControlsProps {
	upHandlers: HookHandlers
	downHandlers: HookHandlers
	className?: string
}

export const SearchControls: FC<SearchControlsProps> = ({
	upHandlers,
	downHandlers,
	className,
}) => {
	return (
		<ControlsWrapper className={className}>
			<StyledControl {...upHandlers}>
				<IconControlUp />
			</StyledControl>
			<StyledControl {...downHandlers}>
				<IconControlDown />
			</StyledControl>
		</ControlsWrapper>
	)
}
