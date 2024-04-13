import { FC, useState, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { TextField, Button, Select, FormControl, InputLabel, Box, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
// import toast from 'react-hot-toast'
import isEqual from 'lodash/isEqual'
import { MuiTelInput } from 'mui-tel-input'
import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'

import DatePicker from '@/shared/ui/date-picker'
import PhotoUploader from '@/shared/ui/file-uploader'

//! import { userDataDto as FormData } from '@/entities/user/api/dto/user-data.dto'
//! Uncaught SyntaxError: The requested module '/src/entities/user/api/dto/user-data.dto.ts' does not provide an export named 'userDataDto' (at index.tsx:13:10)

import { usePostUserData } from '@/features/modify-user-settings/api/modify-user-settings'
import { setUserData } from '@/entities/user/model/slice'
import { getUserData } from '@/entities/user/api/get-userData'
import { useUser } from '@/entities/user/hooks/use-user'

import { usePostUserAvatar } from '@/features/modify-user-settings/api/modify-user-avatar'
import PageLoader from '@/features/PageLoader'

const validationSchema = yup.object({
	email: yup.string().email('Enter a valid email').required('Email is required'),
	// password: yup
	// 	.string()
	// 	.min(8, 'Password should be of minimum 8 characters length')
	// 	.required('Password is required'),
})

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

const transformValueToInput = (value: number) => {
	return value / 10
}
const transformInputToValue = (inputValue: number) => {
	return inputValue * 10
}

export type FormData = {
	[key: string]: File | null | string | number
	image: File | null | string
	name: string
	surname: string
	username: string
	email: string
	phoneNumber: string
	archerLevel: string
	birthday: string
	bowXParameter: number
	bowYParameter: number
	bowBase: number
}

const UserSettings: FC = () => {
	const theme = useTheme()
	const dispatch = useDispatch()
	const userData = useUser()

	const {
		data: fetchedUserData,
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ['user-data'],
		queryFn: getUserData,
	})

	useEffect(() => {
		if (fetchedUserData) {
			refetch()
			setServerFormValues({ ...fetchedUserData })
			dispatch(setUserData({ ...fetchedUserData }))
		}
	}, [fetchedUserData])

	const [serverFormValues, setServerFormValues] = useState<FormData>({
		image: null,
		name: '',
		surname: '',
		username: '',
		email: '',
		phoneNumber: '',
		birthday: '2001-04-07',
		archerLevel: '',
		bowXParameter: 0,
		bowYParameter: 0,
		bowBase: 0,
	})

	const { mutateAsync: mutateUserDataAsync } = usePostUserData()
	const { mutateAsync: mutateUserAvatarAsync } = usePostUserAvatar()

	const handleUploadAvatar = async () => {
		let image = formik.values.image
		if (image) {
			if (image instanceof Blob) {
				const avatar = new FormData()
				avatar.append('avatar', image)
				mutateUserAvatarAsync(avatar)
			}
		} else {
			console.error('No image selected')
		}
	}
	const formik = useFormik({
		initialValues: {
			image: userData.image,
			name: userData.name,
			surname: userData.surname,
			username: userData.username,
			email: userData.email,
			phoneNumber: userData.phoneNumber,
			birthday: userData.birthday,
			archerLevel: userData.archerLevel,
			bowXParameter: userData.bowXParameter,
			bowYParameter: userData.bowYParameter,
			bowBase: userData.bowBase,
		},
		enableReinitialize: true,
		validationSchema: validationSchema,
		onSubmit: (values: FormData) => {
			const changedFields = Object.keys(values).filter(
				key => !isEqual(values[key], serverFormValues[key]),
			)
			const changedValues = changedFields.reduce((acc, key) => {
				acc[key as keyof FormData] = values[key as keyof FormData]
				if (key === 'image') {
					acc[key as keyof FormData] = undefined
				}
				return acc
			}, {} as Partial<FormData>)

			handleUploadAvatar()
			mutateUserDataAsync(changedValues).then(() => {
				setServerFormValues(formik.values)
				dispatch(setUserData(formik.values))
			})
		},
	})

	if (isLoading) {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<PageLoader />
			</Box>
		)
	}
	return (
		<form onSubmit={formik.handleSubmit}>
			<Box sx={{ m: 2, mt: '25px', ml: '30px' }}>
				<Typography
					sx={{ textAlign: 'left' }}
					variant="h2"
					color={theme.palette.customColors.text_color?.headline}>
					Personal Information
				</Typography>
				<Box sx={{ display: 'flex', flexDirection: 'row', mt: '25px' }}>
					<Box sx={{ display: 'flex', margin: '10px' }}>
						<PhotoUploader
							image={formik.values.image}
							onChangeFile={file => {
								formik.setFieldValue('image', file)
							}}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							marginLeft: '10px',
							width: '100%',
						}}>
						<InputTextField
							label="First name"
							name="name"
							margin="normal"
							fullWidth
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.name && Boolean(formik.errors.name)}
							helperText={formik.touched.name && formik.errors.name}
						/>

						<InputTextField
							label="Last name"
							name="surname"
							margin="normal"
							fullWidth
							value={formik.values.surname}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.surname && Boolean(formik.errors.surname)}
							helperText={formik.touched.surname && formik.errors.surname}
						/>

						<InputTextField
							label="Username"
							name="username"
							margin="normal"
							fullWidth
							value={formik.values.username}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.username && Boolean(formik.errors.username)}
							helperText={formik.touched.username && formik.errors.username}
						/>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
						<InputTextField
							id="email"
							name="email"
							label="Email"
							margin="normal"
							fullWidth
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>

						<MuiTelInput
							id="phone"
							name="phoneNumber"
							label="Phone number"
							margin="normal"
							value={formik.values.phoneNumber}
							onChange={value => {
								formik.setFieldValue('phoneNumber', value)
							}}
							onBlur={formik.handleBlur}
							error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
							helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
						/>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', width: '40%' }}>
						<DatePicker
							id="birthday"
							name="birthday"
							label="Date of Birth"
							value={formik.values.birthday}
							onChangeDate={(date: string) => formik.setFieldValue('birthday', date)}
						/>
						<FormControl sx={{ minWidth: '100%', marginRight: '10px' }} margin="normal">
							<InputLabel>Archer level</InputLabel>
							<Select
								native
								value={formik.values.archerLevel}
								onChange={formik.handleChange}
								name="archerLevel"
								label="Archer level">
								<option aria-label="None" value="" />
								<optgroup label="Юношеские">
									<option value={'U1'}>Юношеские 1 ранг</option>
									<option value={'U2'}>Юношеские 2 ранг</option>
									<option value={'U3'}>Юношеские 3 ранг</option>
								</optgroup>
								<optgroup label="Взрослые">
									<option value={'A1'}>Взрослые 1 ранг</option>
									<option value={'A2'}>Взрослые 2 ранг</option>
									<option value={'A3'}>Взрослые 3 ранг</option>
								</optgroup>
								<option value={'KMC'}>KMC</option>
								<option value={'MC'}>MC</option>
								<option value={'MCMK'}>MCMK</option>
								<option value={'ZMS'}>ЗМС</option>
							</Select>
						</FormControl>
					</Box>
				</Box>

				<Typography
					sx={{ mt: '30px', textAlign: 'left' }}
					variant="h2"
					color={theme.palette.customColors.text_color?.headline}>
					Bow Parameters
				</Typography>
				<Box sx={{ mt: '20px', display: 'flex', flexDirection: 'column', width: '150px' }}>
					<Typography sx={{ textAlign: 'left' }} variant="paragraph3">
						Aim
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row', width: '150px' }}>
						<InputTextField
							id="bowXParameter"
							name="bowXParameter"
							label="X"
							margin="normal"
							type="number"
							inputProps={{
								step: 0.1,
							}}
							value={transformValueToInput(formik.values.bowXParameter)}
							onChange={event => {
								const transformedValue = transformInputToValue(parseFloat(event.target.value))
								formik.handleChange({
									target: {
										name: 'bowXParameter',
										value: transformedValue,
									},
								})
							}}
							onBlur={formik.handleBlur}
							error={formik.touched.bowXParameter && Boolean(formik.errors.bowXParameter)}
							helperText={formik.touched.bowXParameter && formik.errors.bowXParameter}
						/>

						<InputTextField
							id="bowYParameter"
							name="bowYParameter"
							label="Y"
							margin="normal"
							type="number"
							inputProps={{
								step: 0.1,
							}}
							value={transformValueToInput(formik.values.bowYParameter)}
							onChange={event => {
								const transformedValue = transformInputToValue(parseFloat(event.target.value))
								formik.handleChange({
									target: {
										name: 'bowYParameter',
										value: transformedValue,
									},
								})
							}}
							onBlur={formik.handleBlur}
							error={formik.touched.bowYParameter && Boolean(formik.errors.bowYParameter)}
							helperText={formik.touched.bowYParameter && formik.errors.bowYParameter}
						/>
					</Box>
				</Box>
				<InputTextField
					id="bowBase"
					name="bowBase"
					label="Base"
					margin="normal"
					type="number"
					sx={{ display: 'flex', justifyContent: 'left', width: '250px' }}
					inputProps={{
						step: 0.1,
					}}
					value={transformValueToInput(formik.values.bowBase)}
					onChange={event => {
						const transformedValue = transformInputToValue(parseFloat(event.target.value))
						formik.handleChange({
							target: {
								name: 'bowBase',
								value: transformedValue,
							},
						})
					}}
					onBlur={formik.handleBlur}
					error={formik.touched.bowBase && Boolean(formik.errors.bowBase)}
					helperText={formik.touched.bowBase && formik.errors.bowBase}
				/>

				<Button
					sx={{ mt: '50px', width: '100px' }}
					color="primary"
					variant="contained"
					type="submit">
					Save
				</Button>
			</Box>
		</form>
	)
}

export default UserSettings
