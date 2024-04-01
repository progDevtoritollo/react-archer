// import React, { FC } from 'react'
import { Typography } from '@mui/material'

import './index.scss'

interface SerieInfoSectionProps {
	InfoNumber: number
}

const SerieInfoSection = ({ InfoNumber }: SerieInfoSectionProps) => {
	return (
		<div className="box">
			<Typography variant="TextField">{Math.round(InfoNumber)}</Typography>
		</div>
	)
}

export default SerieInfoSection
