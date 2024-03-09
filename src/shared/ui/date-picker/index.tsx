import { FC } from 'react'
import { TextField, FormControl } from '@mui/material'

interface DatePickerProps {
	id: string
	name: string
	label: string
	value: string // Значение даты
	onChangeDate: (date: string) => void // Date change handler
}

const DatePicker: FC<DatePickerProps> = ({ id, name, value, onChangeDate, label }) => {
	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChangeDate(event.target.value)
	}
	return (
		<>
			<FormControl
				sx={{
					'& input[type="date"]::-webkit-calendar-picker-indicator': { filter: 'invert(1)' },
				}}>
				<TextField
					id={id}
					name={name}
					label={label}
					type="date"
					value={value}
					margin="normal"
					inputProps={{
						min: '1960-01-01',
						max: '2024-01-01',
						style: { appearance: 'none' },
					}}
					onChange={handleDateChange}
				/>
			</FormControl>
		</>
	)
}

export default DatePicker
