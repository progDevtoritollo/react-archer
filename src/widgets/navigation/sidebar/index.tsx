import { FC, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

import logo from '@/app/assets/img/Logo.png'
import { menuItems } from '../menu-items'

const SideBar: FC = () => {
	const theme = useTheme()
	const menu = theme.palette.customColors.menu
	const [activeIndex, setActiveIndex] = useState('/user/notifications')
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', mx: '30px' }}>
			<Box sx={{ mt: '40px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
				<img width="43" height="52" src={logo} alt="Logo" />
				<Typography variant="logo" color={theme.palette.customColors.logo?.text}>
					Archer
				</Typography>
			</Box>
			<Box>
				{Object.keys(menuItems).map((menuItem, index) => (
					<Box
						key={index}
						sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
						<Typography sx={{ mb: '15px', mt: '35px' }} variant="h2" color={menu?.text_headline}>
							{menuItems[menuItem].label}
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
											background:
												activeIndex === subMenuItem.link ? menu?.text_sections.bg_pressed : 'white',
											color:
												activeIndex === subMenuItem.link
													? menu?.text_sections.text_pressed
													: menu?.text_sections.text_enabled,
											borderRadius: '10px',
											pl: '15px',
											pt: '5px',
											mb: '3px',
											pr: '17px',
											width: '100%',
											transition: 'background-color 0.1s, color 0.3s',
											'&:hover, &:active': {
												background: menu?.text_sections.bg_pressed,
												color: menu?.text_sections.text_pressed,
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
