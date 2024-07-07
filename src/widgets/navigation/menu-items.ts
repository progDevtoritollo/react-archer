import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material/SvgIcon'

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'
import LegendToggleOutlinedIcon from '@mui/icons-material/LegendToggleOutlined'
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined'

import EventOutlinedIcon from '@mui/icons-material/EventOutlined'

import AssistantPhotoOutlinedIcon from '@mui/icons-material/AssistantPhotoOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined'

type MenuItem = {
	label: string
	subMenu: SubMenuItem[]
}

// type SubMenuItem = {
// 	icon: ReactElement
// 	label: string
// 	link: string
// }

type SubMenuItem = {
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
	label: string
	link: string
}

type menuItems = {}

export const menuItems: Record<string, MenuItem> = {
	User: {
		label: 'User',
		subMenu: [
			{
				icon: SettingsOutlinedIcon,
				label: 'Settings',
				link: '/user/settings',
			},
			{
				icon: NotificationsNoneOutlinedIcon,
				label: 'Notifications',
				link: '/user/notifications',
			},
			{
				icon: PersonAddAlt1OutlinedIcon,
				label: 'Friends',
				link: '/user/friends',
			},
			{
				icon: LegendToggleOutlinedIcon,
				label: 'Statistic',
				link: '/user/statistic',
			},
			{
				icon: DirectionsRunOutlinedIcon,
				label: 'Activity',
				link: '/user/activity',
			},
		],
	},
	Club: {
		label: 'Club',
		subMenu: [
			{
				icon: LegendToggleOutlinedIcon,
				label: 'Statistic',
				link: '/club/menu1',
			},
			{
				icon: DirectionsRunOutlinedIcon,
				label: 'Activity',
				link: '/club/activity',
			},
			{
				icon: EventOutlinedIcon,
				label: 'Find/Create Club',
				link: '/club/find-create',
			},
			{
				icon: EventOutlinedIcon,
				label: 'Events',
				link: '/club/menu3',
			},
			{
				icon: SettingsOutlinedIcon,
				label: 'Settings',
				link: '/club/menu3',
			},
		],
	},
	Events: {
		label: 'Events',
		subMenu: [
			{
				icon: AssistantPhotoOutlinedIcon,
				label: 'Quick round',
				link: '/create/quick-round',
			},
			{
				icon: StarBorderOutlinedIcon,
				label: 'Duel',
				link: '/menu2',
			},
			{
				icon: LeaderboardOutlinedIcon,
				label: 'Competition',
				link: '/menu3',
			},
		],
	},
}
