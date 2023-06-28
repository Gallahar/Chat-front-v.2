import { useSettingsForm } from '@/entities/user/hooks/useSettingsForm'
import { selectUser } from '@/entities/user/model'
import { useAppSelector } from '@/shared/lib/hooks/redux'
import { useFile } from '@/shared/lib/hooks/useFile'
import { ChatInput, PrimaryButton, SecondaryButton } from '@/shared/ui'
import { Avatar, styled } from '@mui/material'
import { useRef, useState } from 'react'

const StyledForm = styled('form')`
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding: 18px;
	width: 100%;
	max-width: 266px;
	position: absolute;
	right: 30px;
	top: 100px;
	background-color: rgba(255, 255, 255, 0.1);
	background-blend-mode: soft-light;
	box-shadow: 0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset,
		0px 4px 4px 0px rgba(255, 255, 255, 0.15) inset;
	backdrop-filter: contrast(120%) brightness(150%) blur(20px);
	border-radius: 20px;
	z-index: 1;
`

export const SettingsForm = () => {
	const initialUrl = useAppSelector(selectUser).avatar
	const { fileUrl, onChangeInputFile } = useFile('avatar', initialUrl)
	const { error, onChangeUserName, onSubmit, username } =
		useSettingsForm(fileUrl)
	const inputRef = useRef<HTMLInputElement>(null)
	const [showInput, setShowInput] = useState(false)

	return (
		<StyledForm onSubmit={onSubmit}>
			<Avatar src={fileUrl} sx={{ width: '218px', height: '218px' }} />
			<SecondaryButton
				onClick={() => inputRef?.current?.click()}
				type="submit"
				isAuth={true}
			>
				Change Avatar
			</SecondaryButton>
			<input
				ref={inputRef}
				type="file"
				onChange={onChangeInputFile}
				hidden
			/>
			{showInput ? (
				<ChatInput
					value={username}
					error={error}
					onChange={onChangeUserName}
				/>
			) : (
				<SecondaryButton
					onClick={() => setShowInput(true)}
					type="button"
					isAuth={true}
				>
					Change username
				</SecondaryButton>
			)}
			<PrimaryButton
				type="submit"
				sx={{
					fontSize: '15px',
					padding: '9px 0',
					borderRadius: '10px',
				}}
			>
				Save Changes
			</PrimaryButton>
		</StyledForm>
	)
}
