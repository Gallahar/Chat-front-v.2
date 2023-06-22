import { ChangeEvent, useState } from 'react'
import { useAppSelector } from './redux'
import { selectUser } from '@/entities/user/model'
import {
	useDeleteFileMutation,
	useUploadFileMutation,
} from '@/shared/api/fileApi'

interface UseFileReturn {
	onChangeInputFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	onDeleteInputFile: () => Promise<void>
	fileUrl: string
}

export const useFile = (folder: string): UseFileReturn => {
	const [uploadFile] = useUploadFileMutation()
	const [deleteFile] = useDeleteFileMutation()
	const initialUrl = useAppSelector(selectUser).avatar
	const [fileUrl, setFileUrl] = useState(initialUrl)
	const [fileName, setFileName] = useState('')

	const onChangeInputFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files?.length) return
		const file = new FormData()
		file.append('file', files[0])
		try {
			const { url, name } = await uploadFile({ file, folder }).unwrap()
			setFileUrl(url)
			setFileName(name)
		} catch (e) {
			console.error(e)
		}
	}

	const onDeleteInputFile = async () => {
		await deleteFile(fileName)
		setFileUrl(initialUrl)
	}

	return { fileUrl, onChangeInputFile, onDeleteInputFile }
}
