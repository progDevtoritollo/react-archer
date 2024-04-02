import { FC, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Grid, useMediaQuery, Box, Container, Paper } from '@mui/material'

import SideBar from '@/widgets/navigation/sidebar'
import RightSidebar from '@/features/RightSidebar'
import FooterBar from '@/features/FooterBar'

const PageLayout: FC = () => {
	//? how use style from materialUI in Component
	//? to center PageLayout and give it max-width for adaptive

	const isMobile = useMediaQuery('(max-width:600px)')
	const isTablet = useMediaQuery('(min-width:800px)')
	//? change to brakePoints from material

	if (isMobile) {
		return (
			<Fragment>
				<Container
					component="main"
					maxWidth="xs"
					style={{ position: 'relative', paddingBottom: '56px' }}>
					<Outlet />
				</Container>
				<Box position="fixed" bottom={0} width="100%">
					<FooterBar />
				</Box>
			</Fragment>
		)
	} else {
		return (
			<Fragment>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={2} md={2.5} lg={2} xl={1.5}>
						<Paper style={{ height: '100vh' }}>
							<SideBar />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={8} md={7} lg={7} xl={7.5}>
						<Box sx={{ height: '100%' }}>
							<Outlet />
						</Box>
					</Grid>
					{isTablet ? (
						<Grid item xs={12} sm={2} md={2.5} lg={3} xl={3}>
							<Paper style={{ height: '100%' }}>
								<RightSidebar />
							</Paper>
						</Grid>
					) : null}
				</Grid>
			</Fragment>
		)
	}
}

export default PageLayout
