import { useSettingsForm } from '@/entities/user/hooks/useSettingsForm'
import { useFile } from '@/shared/lib/hooks/useUpload'
import { Input, PrimaryButton } from '@/shared/ui'
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
	background-color: rgba(255, 255, 255, 0.2);
	background-blend-mode: soft-light;
	box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.15),
		inset 0px 0px 68px rgba(255, 255, 255, 0.05);
	backdrop-filter: contrast(120%) brightness(150%) blur(20px);
	border-radius: 20px;
`

export const SettingsForm = () => {
	const { fileUrl, onChangeInputFile } = useFile('avatar')
	const { error, onChangeUserName, onSubmit, username } =
		useSettingsForm(fileUrl)
	const inputRef = useRef<HTMLInputElement>(null)
	const [showInput, setShowInput] = useState(false)

	return (
		<StyledForm onSubmit={onSubmit}>
			<Avatar src={fileUrl} sx={{ width: '218px', height: '218px' }} />
			<PrimaryButton onClick={()=>inputRef?.current?.click()}
				type="submit"
				sx={{
					fontSize: '15px',
					padding: '9px 0',
					borderRadius: '10px',
				}}
			>
				Change Avatar
			</PrimaryButton>
			<input
				ref={inputRef}
				type="file"
				onChange={onChangeInputFile}
				hidden
			/>
			{showInput ? (
				<Input
					value={username}
					error={error}
					onChange={onChangeUserName}
					label="New username"
					inputVariant="chat"
				/>
			) : (
				<PrimaryButton
					onClick={() => setShowInput(true)}
					type="button"
					sx={{
						fontSize: '15px',
						padding: '9px 0',
						borderRadius: '10px',
					}}
				>
					Change username
				</PrimaryButton>
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
