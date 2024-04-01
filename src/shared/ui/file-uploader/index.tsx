import React, { FC } from 'react'
import { Box, Button, styled, Avatar, Typography } from '@mui/material'
import toast from 'react-hot-toast'
import Compressor from 'compressorjs'

interface PhotoUploaderProps {
	username?: string
	value?: File | null | string
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

	const handleFileChanged = (value: File | null) => {
		if (value) {
			new Compressor(value, {
				quality: 0.6,
				maxWidth: 600,
				maxHeight: 600,
				success: compressedFile => {
					const reader = new FileReader()
					reader.onload = event => {
						if (event.target && typeof event.target.result === 'string') {
							setImageUrl(event.target.result)
						}
					}
					reader.readAsDataURL(compressedFile)
					onChangeFile(new File([compressedFile], value.name, { type: value.type }))
				},
				error: err => {
					toast.error(err.message)
				},
			})
		} else {
			setImageUrl(undefined)
		}
	}

	return (
		<Box sx={{ display: 'inline-flex', flexDirection: 'column', margin: '10px' }}>
			<Avatar
				alt={username}
				src={typeof value === 'string' ? value : imageUrl}
				sx={{ width: 170, height: 170, mb: '10px' }}
			/>
			<Button
				component="label"
				role={undefined}
				variant="text"
				sx={{
					color: 'inherit',
					backgroundColor: 'transparent',
					border: 'none',
					padding: 0,
					textTransform: 'none',
				}}>
				<Typography variant="button">Change image profile</Typography>
				<VisuallyHiddenInput
					accept="image/*"
					type="file"
					onChange={e => handleFileChanged(e.target.files ? e.target.files[0] : null)}
				/>
			</Button>
		</Box>
	)
}

export default PhotoUploader
