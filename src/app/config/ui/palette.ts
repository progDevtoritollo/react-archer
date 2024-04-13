declare module '@mui/material/styles' {
	interface CustomPalette {
		badge?: string
		text_color?: TextColor
		logo?: LogoColor
		btn_change_target?: Button
		btn_undo_last?: Button
		btn_reject?: Button
		btn_universal?: Button
		btn_surrender?: Button
		card?: Card
		menu?: Menu
		dropdown_button_settings?: DropDownBtnSettings
		input?: Input
		text_field?: TextField
		right_bar?: RightBar
	}
	interface CustomPaletteOptions {
		badge?: string
		text_color?: TextColorOptions
		logo?: LogoColorOptions
		btn_change_target?: ButtonOptions
		btn_undo_last?: ButtonOptions
		btn_reject?: ButtonOptions
		btn_universal?: ButtonOptions
		btn_surrender?: ButtonOptions
		card?: CardOptions
		menu?: MenuOptions
		dropdown_button_settings?: DropDownBtnSettingsOptions
		input?: InputOptions
		text_field?: TextFieldOptions
		right_bar?: RightBarOptions
	}
}

interface TextColor {
	headline?: string
	marking_with_who_duel?: string
	underlined?: string
}

interface TextColorOptions {
	headline?: string
	marking_with_who_duel?: string
	underlined?: string
}

interface LogoColor {
	icon?: string
	text?: string
}

interface LogoColorOptions {
	icon?: string
	text?: string
}

interface Button {
	text?: string
	text_enabled?: string
	text_disabled?: string
	enabled?: string
	hover?: string
	hover_stroke?: string
	pressed?: string
	focused?: string
	disabled?: string
	stroke?: string
	stroke_disabled?: string
}

interface ButtonOptions {
	text?: string
	text_enabled?: string
	text_disabled?: string
	enabled?: string
	hover?: string
	hover_stroke?: string
	pressed?: string
	focused?: string
	disabled?: string
	stroke?: string
	stroke_disabled?: string
}

interface Card {
	bg_enabled?: string
	bg_hover?: string
	bg_hover_stroke?: string
	bg_pressed?: string
	bg_focused?: string
	bg_disabled?: string
	text_small?: string
	text_big?: string
	text_big_disabled?: string
	duel: {
		text_score?: string
		text_lose_score_disabled?: string
		score_bg_lose_disabled?: string
		score_stroke_lose_disabled?: string
		score_bg_lose?: string
		score_stroke?: string
		score_bg_winning?: string
		score_bg_winning_disabled?: string
		score_stroke_winning_disabled?: string
		text_winning_score_disabled?: string
	}
	competition: {
		first_place?: string
		second_place?: string
		third_place?: string
	}
	payment_reminder: {
		alert_info?: string
	}
}

interface CardOptions {
	bg_enabled?: string
	bg_hover?: string
	bg_hover_stroke?: string
	bg_pressed?: string
	bg_focused?: string
	bg_disabled?: string
	text_small?: string
	text_big?: string
	text_big_disabled?: string
	duel: {
		text_score?: string
		text_lose_score_disabled?: string
		score_bg_lose_disabled?: string
		score_stroke_lose_disabled?: string
		score_bg_lose?: string
		score_stroke?: string
		score_bg_winning?: string
		score_bg_winning_disabled?: string
		score_stroke_winning_disabled?: string
		text_winning_score_disabled?: string
	}
	competition: {
		first_place?: string
		second_place?: string
		third_place?: string
	}
	payment_reminder: {
		alert_info?: string
	}
}

interface Menu {
	bg: string
	text_headline: string
	button_logout: string
	text_sections: {
		text_enabled: string
		text_hover: string
		bg_hover: string
		bg_pressed: string
		text_pressed: string
	}
}

interface MenuOptions {
	bg: string
	text_headline: string
	button_logout: string
	text_sections: {
		text_enabled: string
		text_hover: string
		bg_hover: string
		bg_pressed: string
		text_pressed: string
	}
}

interface DropDownBtnSettings {
	icon?: string
	dropdown_indicator_bg?: string
}

interface DropDownBtnSettingsOptions {
	icon?: string
	dropdown_indicator_bg?: string
}

interface Input {
	bg?: string
	stroke?: string
	text_inside?: string
	headline?: string
}

interface InputOptions {
	bg?: string
	stroke?: string
	text_inside?: string
	headline?: string
}

interface TextField {
	search: {
		bg: string
		stroke: string
		text_filled: string
		icon: string
		bar_focused: string
		stroke_focused: string
		text_enabled: string
		text_no_matches_found: string
	}
	dropdown_menu: {
		stroke: string
		text: string
		bg_default: string
		bg_hover: string
		bg_selected: string
		stroke_selected: string
		bg_selected_hover: string
	}
	score_display: {
		bg: string
		text: string
		stroke: string
		text_score_descriptor: string
		target: { outermost_circle: string; middle_circle: string; outer_circle: string }
	}
}

interface TextFieldOptions {
	search: {
		bg: string
		stroke: string
		text_filled: string
		icon: string
		bar_focused: string
		stroke_focused: string
		text_enabled: string
		text_no_matches_found: string
	}
	dropdown_menu: {
		stroke: string
		text: string
		bg_default: string
		bg_hover: string
		bg_selected: string
		stroke_selected: string
		bg_selected_hover: string
	}
	score_display: {
		bg: string
		text: string
		stroke: string
		text_score_descriptor: string
		target: { outermost_circle: string; middle_circle: string; outer_circle: string }
	}
}

interface RightBar {
	bg?: string
	bg_stroke?: string
}

interface RightBarOptions {
	bg?: string
	bg_stroke?: string
}

const customColors = {
	badge: '#EE6767',
	text_color: {
		headline: '#151515',
		marking_with_who_duel: '#999797',
		underlined: '#A8A6B3',
	},
	logo: { icon: '#161616', text: '#161616' },
	btn_change_target: {
		text: '#F5F7F8',
		enabled: '#819CF1',
		hover: '#819CF1',
		hover_stroke: '#9EB2F3',
		pressed: '#5A6DAB',
		focused: '#728BDA',
		disabled: '#B2C2F1',
	},
	btn_undo_last: {
		text: '#F5F7F8',
		enabled: '#D14343',
		hover: '#D14343',
		hover_stroke: '#DE6A6A',
		pressed: '#922F2F',
		focused: '#C03E3E',
		disabled: '#EEAEAE',
	},
	btn_reject: {
		text_enabled: '#474D66',
		enabled: '#D2D9D8',
		hover: '#D2D9D8',
		hover_stroke: '#EBEBEB',
		pressed: '#8A9694',
		focused: '#C6C6C6',
		disabled: '#F3F3F3',
		text_disabled: '#C2C3C7',
	},
	btn_universal: {
		text: '#F5F7F8',
		enabled: '#479F9F',
		hover: '#479F9F',
		hover_stroke: '#E0EDED',
		pressed: '#306666',
		focused: '#3F8585',
		disabled: '#D2E9E9',
	},
	btn_surrender: {
		text: '#161616',
		enabled: '#D7D7D7',
		hover: '#EAEAEA',
		stroke: '#161616',
		pressed: '#F9F9F9',
		focused: '#F9F9F9',
		disabled: '#F2F2F2',
		stroke_disabled: '#B1B1B1',
		text_disabled: '#C6C6C6',
	},
	card: {
		bg_enabled: '#F7F7F7',
		bg_hover: '#F7F7F7',
		bg_hover_stroke: '#EAEAEA',
		bg_pressed: '#E3E3E3',
		bg_focused: '#EAEAEA',
		bg_disabled: '#F2F2F2',
		text_small: '#A8A6B3',
		text_big: '#161616',
		text_big_disabled: '#B1B1B1',
		duel: {
			text_score: '#161616',
			text_lose_score_disabled: '#A18686',
			score_bg_lose_disabled: '#F3C7C7',
			score_stroke_lose_disabled: '#9D8383',
			score_bg_lose: '#F49C9C',
			score_stroke: '#161616',
			score_bg_winning: '#A8E199',
			score_bg_winning_disabled: '#DDEED8',
			score_stroke_winning_disabled: '#798277',
			text_winning_score_disabled: '#798277',
		},
		competition: {
			first_place: '#F8DA66',
			second_place: '#E0E0E0',
			third_place: '#F7A969',
		},
		payment_reminder: {
			alert_info: '#3366FF',
		},
	},
	menu: {
		bg: '#F7F7F7',
		text_headline: '#A8A6B3',
		button_logout: '#A8A6B3',
		text_sections: {
			text_enabled: '#161616',
			text_hover: '#FFF9F9',
			bg_hover: '#474D66',
			bg_pressed: '#474D66',
			text_pressed: '#FFF9F9',
		},
	},
	dropdown_button_settings: {
		icon: '#8F95B2',
		dropdown_indicator_bg: '#F4F6FA',
	},
	input: {
		bg: '#FFFFFF',
		stroke: '#D8DAE5',
		text_inside: '#474D66',
		headline: '#606060',
	},
	text_field: {
		search: {
			bg: '#FFFFFF',
			stroke: '#D8DAE5',
			text_filled: '#474D66',
			icon: '#8F95B2',
			bar_focused: '#474D66',
			stroke_focused: '#9DB5FF',
			text_enabled: '#8F95B2',
			text_no_matches_found: '#D9D9D9',
		},
		dropdown_menu: {
			stroke: '#E3E3E3',
			text: '#161616',
			bg_default: '#FFFFFF',
			bg_hover: '#E6E6E6',
			bg_selected: '#FFFFFF',
			stroke_selected: '#D7D7D7',
			bg_selected_hover: '#D9D9D9',
		},
		score_display: {
			bg: '#FFFFFF',
			text: '#696F8C',
			stroke: '#D8DAE5',
			text_score_descriptor: '#A8A6B3',
			target: { outermost_circle: '#01B0EE', middle_circle: '#F94F65', outer_circle: '#FEE148' },
		},
	},
	right_bar: {
		bg: '#FFFCFC',
		bg_stroke: '#F7F7F7',
	},
}

export default customColors
