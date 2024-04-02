import { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import logo from '@/app/assets/img/Logo.png'
import { menuItems } from '../menu-items'

const SideBar: FC = () => {
	const [activeIndex, setActiveIndex] = useState('/user/notifications')
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', mx: '30px' }}>
			<Box sx={{ mt: '40px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
				<img width="43" height="52" src={logo} alt="Logo" />
				<Typography variant="logo">Archer</Typography>
				{/* //! change color */}
			</Box>
			<Box>
				{Object.keys(menuItems).map((menuItem, index) => (
					<Box
						key={index}
						sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
						<Typography sx={{ mb: '15px', mt: '35px' }} variant="h2">
							{menuItems[menuItem].label}
							{/* //! change color */}
						</Typography>
						<Box sx={{ width: '170px' }}>
							{menuItems[menuItem].subMenu.map((subMenuItem, subIndex) => (
								<Link
									to={subMenuItem.link}
									key={subIndex}
									style={{ textDecoration: 'none', color: 'black' }}
									onClick={() => setActiveIndex(subMenuItem.link)}>
									<Box
										sx={{
											// ! set colors
											background: activeIndex === subMenuItem.link ? '#474D66' : 'white',
											color: activeIndex === subMenuItem.link ? 'white' : 'black',
											borderRadius: '10px',
											pl: '15px',
											pt: '5px',
											mb: '3px',
											pr: '17px',
											width: '100%',
											transition: 'background-color 0.1s, color 0.3s',
											'&:hover, &:active': {
												background: '#474D66',
												color: 'white',
											},
										}}>
										<Box>
											<Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
												<Box sx={{ mr: '5px' }}>
													<subMenuItem.icon fontSize="medium" />
												</Box>
												<Typography variant="paragraph1">{subMenuItem.label}</Typography>
											</Box>
										</Box>
									</Box>
								</Link>
							))}
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	)
}
export default SideBar
