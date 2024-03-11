import React, { FC } from 'react'
import { Box, Button, styled, Avatar } from '@mui/material'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'

interface PhotoUploaderProps {
	username?: string
	value?: File | null
	onChangeFile: (file: File | null) => void
}

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
})

const PhotoUploader: FC<PhotoUploaderProps> = ({ username, value, onChangeFile }) => {
	const [imageUrl, setImageUrl] = React.useState<string | undefined>(undefined)

	React.useEffect(() => {
		if (value) {
			const reader = new FileReader()
			reader.onload = event => {
				if (event.target && typeof event.target.result === 'string') {
					setImageUrl(event.target.result)
				}
			}
			reader.readAsDataURL(value)
		} else {
			setImageUrl(undefined)
		}
	}, [value])

	return (
		<Box sx={{ display: 'inline-flex', flexDirection: 'column', margin: '10px' }}>
			<Avatar alt={username} src={imageUrl} sx={{ width: 150, height: 150 }} />
			<Button
				component="label"
				role={undefined}
				variant="contained"
				tabIndex={-1}
				startIcon={<CloudUploadIcon />}>
				Upload file
				<VisuallyHiddenInput
					type="file"
					onChange={e => onChangeFile(e.target.files ? e.target.files[0] : null)}
				/>
			</Button>
		</Box>
	)
}

export default PhotoUploader
