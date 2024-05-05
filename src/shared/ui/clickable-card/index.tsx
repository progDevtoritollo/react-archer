import { FC, ReactNode } from 'react'
import { Paper } from '@mui/material'

import theme from '@/app/config/ui/theme'

const styles = {
	paper: {
		backgroundColor: theme.palette.customColors.card?.bg_enabled,
		border: 0,
		boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)',
		width: '99%',
		display: 'flex',
		justifyContent: 'space-between',
		mb: '15px',
		ml: '10px',
		mr: '10px',
		p: '10px',
		pl: '0px',
		borderRadius: '10px',
	},
}

interface ClickableCard {
	children: ReactNode
}

export const ClickableCard: FC<ClickableCard> = ({ children }) => {
	return (
		<Paper variant="outlined" sx={styles.paper}>
			{children}
		</Paper>
	)
}
