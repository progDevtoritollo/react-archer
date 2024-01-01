import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import BuildIcon from '@mui/icons-material/Build'
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery'
import CellTowerIcon from '@mui/icons-material/CellTower'

const FooterBar: React.FC = () => {
	const [value, setValue] = useState<number>(0)

	return (
		<BottomNavigation
			showLabels
			sx={{
				width: '100%',
				bottom: 0,
			}}
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue)
			}}>
			<BottomNavigationAction
				label='Recents'
				icon={<AcUnitIcon />}
			/>
			<BottomNavigationAction
				label='Favorites'
				icon={<BuildIcon />}
			/>
			<BottomNavigationAction
				label='Nearby'
				icon={<EarbudsBatteryIcon />}
			/>
			<BottomNavigationAction
				label='Nearby'
				icon={<CellTowerIcon />}
			/>
		</BottomNavigation>
	)
}
export default FooterBar
