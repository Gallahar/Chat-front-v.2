import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import {
	useDeleteFileMutation,
	useUploadFileMutation,
} from '@/shared/api/fileApi'

interface UseFileReturn {
	onChangeInputFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	onDeleteInputFile: (url: string) => Promise<void>
	fileUrl: string
	setFileUrl: Dispatch<SetStateAction<string>>
	fileList: string[]
	setFileList: Dispatch<SetStateAction<string[]>>
}

export const useFile = (
	folder: string,
	type?: 'chat' | 'settings',
	initialUrl?: string
): UseFileReturn => {
	const [uploadFile] = useUploadFileMutation()
	const [deleteFile] = useDeleteFileMutation()
	const [fileUrl, setFileUrl] = useState(initialUrl ?? '')
	const [fileList, setFileList] = useState<string[]>([])

	const onChangeInputFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files?.length) return
		const file = new FormData()
		file.append('file', files[0])
		try {
			const { url } = await uploadFile({ file, folder }).unwrap()
			if (type === 'settings') {
				setFileUrl(url)
			} else {
				setFileList((prev) => [...prev, url])
			}
		} catch (e) {
			console.error(e)
		}
	}

	const onDeleteInputFile = async (url: string) => {
		await deleteFile(url)
		setFileUrl(initialUrl ?? '')
	}

	return {
		fileUrl,
		onChangeInputFile,
		onDeleteInputFile,
		setFileUrl,
		fileList,
		setFileList,
	}
}
