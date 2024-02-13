import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import img_404 from '@/app/assets/img/404.png'

const NotFound = () => {
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
			<Typography sx={{ mt: '20px', mb: '10px' }} variant="NOT_FOUND_PAGE_Big" component="div">
				404 NOT FOUND PAGE
			</Typography>

			<Link to="/">
				<Typography variant="NOT_FOUND_PAGE_little_underline" component="div">
					Back to main page
				</Typography>
			</Link>
		</Box>
	)
}

export default NotFound
