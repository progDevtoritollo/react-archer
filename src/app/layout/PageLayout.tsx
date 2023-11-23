import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Grid, useMediaQuery } from '@mui/material'

import SideBar from "@/features/SideBar";
import LeftSidebar from '@/features/LeftSidebar'
import FooterBar from '@/features/FooterBar'

const PageLayout: FC = () => {

	const isMobile = useMediaQuery('(max-width:450px)');
	if (isMobile) {
		return <Fragment>
			<Outlet />
			<FooterBar />
		</Fragment>
	} else {
		return <Fragment>
			<Grid container spacing={3}>
				<Grid item md={2} >
					<SideBar />
				</Grid>
				<Grid item md={8} >
					<Outlet />
				</Grid>
				<Grid item md={2} >
					<LeftSidebar />
				</Grid>
			</Grid>
		</Fragment>;
	}

};

export default PageLayout;