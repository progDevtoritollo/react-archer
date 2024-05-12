import { FC } from 'react'
import { Box, TextField, styled, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'

import CountrySelect from '@/shared/ui/country-picker'
import PhotoUploader from '@/shared/ui/file-uploader'
import { usePostClubData, usePostClubAvatar } from '@/features/create-club/api/index'

export type FormData = {
	image: File | null
	name: string
	country: string
	city: string
	street: string
	buildingNumber: string
}

const validationSchema = yup.object({
	// email: yup.string().email('Enter a valid email').required('Email is required'),
	// password: yup
	// 	.string()
	// 	.min(8, 'Password should be of minimum 8 characters length')
	// 	.required('Password is required'),
	//! add validation
})

const CreateClub: FC = () => {
	const { mutateAsync: mutateClubDataAsync } = usePostClubData()
	const { mutateAsync: mutateClubAvatarAsync } = usePostClubAvatar()

	const InputTextField = styled(TextField)({
		// customization
		// '& label.Mui-focused': {
		// 	color: '#A0AAB4',
		// },
		// '& .MuiInput-underline:after': {
		// 	borderBottomColor: '#B2BAC2',
		// },
		// '& .MuiOutlinedInput-root': {
		// 	'& fieldset': {
		// 		borderColor: '#E0E3E7',
		// 	},
		// 	'&:hover fieldset': {
		// 		borderColor: '#B2BAC2',
		// 	},
		// 	'&.Mui-focused fieldset': {
		// 		borderColor: '#6F7E8C',
		// 	},
		// },

		marginRight: '10px',

		// validation
		'& input:valid + fieldset': {
			borderColor: '#E0E3E7',
			borderWidth: 1,
		},
		'& input:invalid + fieldset': {
			borderColor: 'red',
			borderWidth: 1,
		},
		'& input:valid:focus + fieldset': {
			borderLeftWidth: 4,
			padding: '4px !important', // override inline-style
		},
	})

	const handleUploadAvatar = async () => {
		let image: any = formik.values.image
		if (image !== null) {
			if (image instanceof Blob) {
				const avatar = new FormData()
				avatar.append('image', image)
				mutateClubAvatarAsync(avatar)
			} else {
				console.error('Invalid image type')
			}
		} else {
			console.error('No image selected')
		}
	}

	const formik = useFormik({
		initialValues: {
			image: null,
			name: '',
			country: '',
			city: '',
			street: '',
			buildingNumber: '',
		},
		// validationSchema: validationSchema,
		onSubmit: () => {
			const { image, ...club } = formik.values
			mutateClubDataAsync(club).then(() => {
				//! add to user store that user already have a club
				if (image) {
					handleUploadAvatar()
				}
			})
		},
	})
	//! add "if" user in club he can`t create a new club, he need to leave existing club

	//! after form submited user should see toaster with confirmation that response status 200 and he can manage created club
	return (
		<Box>
			<h3>*The creator automatically become a club coach*</h3>
			<form onSubmit={formik.handleSubmit}>
				<Box sx={{ display: 'flex', margin: '10px' }}>
					<PhotoUploader
						image={formik.values.image}
						onChangeFile={file => {
							formik.setFieldValue('image', file)
						}}
					/>
				</Box>
				<InputTextField
					label="Club name"
					name="name"
					margin="normal"
					fullWidth
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>
				<CountrySelect
					value={formik.values.country}
					setCountry={value => {
						formik.setFieldValue('country', value)
					}}
				/>
				<InputTextField
					label="City"
					name="city"
					margin="normal"
					fullWidth
					value={formik.values.city}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.city && Boolean(formik.errors.city)}
					helperText={formik.touched.city && formik.errors.city}
				/>
				<InputTextField
					label="Street"
					name="street"
					margin="normal"
					fullWidth
					value={formik.values.street}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.street && Boolean(formik.errors.street)}
					helperText={formik.touched.street && formik.errors.street}
				/>
				<InputTextField
					label="Building number"
					name="buildingNumber"
					margin="normal"
					fullWidth
					value={formik.values.buildingNumber}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.buildingNumber && Boolean(formik.errors.buildingNumber)}
					helperText={formik.touched.buildingNumber && formik.errors.buildingNumber}
				/>
				<Button
					sx={{ mt: '50px', width: '100px' }}
					color="primary"
					variant="contained"
					type="submit">
					Save
				</Button>
			</form>
		</Box>
	)
}

export default CreateClub
