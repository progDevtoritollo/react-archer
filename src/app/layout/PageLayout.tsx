import { FC, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Grid, useMediaQuery, Box, Container } from '@mui/material'

import SideBar from '@/features/SideBar'
import RightSidebar from '@/features/RightSidebar'
import FooterBar from '@/features/FooterBar'

const PageLayout: FC = () => {
	//? how use style from materialUI in Component
	//? to center PageLayout and give it max-width for adaptive

	const isMobile = useMediaQuery('(max-width:450px)')
	const isTablet = useMediaQuery('(min-width:800px)')
	//? change to brakePoints from material

	if (isMobile) {
		return (
			<Fragment>
				<Container
					component='main'
					maxWidth='xs'
					style={{ position: 'relative', paddingBottom: '56px' }}>
					<Outlet />
				</Container>
				<Box
					position='fixed'
					bottom={0}
					width='100%'>
					<FooterBar />
				</Box>
			</Fragment>
		)
	} else {
		return (
			<Fragment>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Container
						component='main'
						maxWidth='xl'
						sx={{ textAlign: 'center', mx: 1, display: 'flex', justifyContent: 'center' }}>
						<Grid
							container
							spacing={5}
							justifyContent='center'>
							<Grid
								item
								md={2}>
								<SideBar />
							</Grid>
							<Grid
								item
								md={8}>
								<Outlet />
							</Grid>
							{isTablet ? (
								<Grid
									item
									md={2}>
									<RightSidebar />
								</Grid>
							) : null}
						</Grid>
					</Container>
				</Box>
			</Fragment>
		)
	}
}

export default PageLayout
