import { Box, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

import img_404 from '@/app/assets/img/404.png'

const NotFound = () => {
	const them = useTheme()

	return (
		<Box>
			<Box
				component="img"
				sx={{
					height: 600,
					maxHeight: { xs: 400, sm: 450, md: 600, lg: 1200 },
				}}
				alt="Image page 404."
				src={img_404}
			/>
			<Typography
				sx={{ mt: '20px', mb: '10px', color: them.palette.customColors.text_color?.headline }}
				variant="CapsLockHighlight"
				component="div">
				404 NOT FOUND PAGE
			</Typography>
			<Link to="/">
				<Typography
					variant="UnderlinedText"
					component="div"
					sx={{ color: them.palette.customColors.text_color?.underlined }}>
					Back to main page
				</Typography>
			</Link>
		</Box>
	)
}

export default NotFound
