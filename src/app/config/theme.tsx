import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

//colors
declare module '@mui/material/styles' {
	interface Palette {
		text_dark: Palette['primary']
	}
	interface PaletteOptions {
		text_dark?: PaletteOptions['primary']
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsColorOverrides {
		text_dark: true
	}
}

// typography
declare module '@mui/material/styles' {
	interface TypographyVariants {
		logo: React.CSSProperties

		paragraph1: React.CSSProperties
		paragraph2: React.CSSProperties

		input_regular: React.CSSProperties
		input_semi_bolt: React.CSSProperties
		input_bolt: React.CSSProperties

		log_in_or_sign_up_medium: React.CSSProperties
		log_in_or_sign_up_light: React.CSSProperties

		NOT_FOUND_PAGE_Big: React.CSSProperties
		NOT_FOUND_PAGE_little_underline: React.CSSProperties
	}
	interface TypographyVariantsOptions {
		logo?: React.CSSProperties

		paragraph1?: React.CSSProperties
		paragraph2?: React.CSSProperties

		input_regular?: React.CSSProperties
		input_semi_bolt?: React.CSSProperties
		input_bolt?: React.CSSProperties

		log_in_or_sign_up_medium?: React.CSSProperties
		log_in_or_sign_up_light?: React.CSSProperties

		NOT_FOUND_PAGE_Big?: React.CSSProperties
		NOT_FOUND_PAGE_little_underline?: React.CSSProperties
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		logo: true

		paragraph1: true
		paragraph2: true

		input_regular: true
		input_semi_bolt: true
		input_bolt: true

		log_in_or_sign_up_medium: true
		log_in_or_sign_up_light: true

		NOT_FOUND_PAGE_Big: true
		NOT_FOUND_PAGE_little_underline: true

		h3: false
		h4: false
		h5: false
		h6: false
		subtitle1: false
		subtitle2: false
		body1: false
		body2: false
		caption: false
		overline: false
	}
}

const theme = createTheme({
	palette: {
		background: {
			default: '#ffffff',
			// paper: '#ccc',
		},
		// text: {
		// 	primary: '#000',
		// 	secondary: '#666',
		// },
		text_dark: {
			main: '#161616',
		},
		// action: {
		// 	hover: '#eee',
		// 	disabled: '#999',
		// },
		// divider: '#aaa',
		common: {
			black: '#000',
			white: '#fff',
		},
		// error: {
		// 	main: red.A400,
		// },
	},
	typography: {
		logo: {
			fontFamily: '"Brygada 1918", serif',
			fontSize: '25px',
			fontWeight: '500',
		},
		h1: {
			fontFamily: 'Inter',
			fontSize: '20px',
			fontWeight: '600',
		},
		h2: {
			fontFamily: 'Inter',
			fontSize: '18px',
			fontWeight: '500',
		},
		paragraph1: {
			fontFamily: 'Inter',
			fontSize: '16px',
			fontWeight: '500',
		},
		paragraph2: {
			fontFamily: 'Inter',
			fontSize: '14px',
			fontWeight: '500',
		},

		button: {
			fontFamily: 'Inter',
			fontSize: '12px',
			fontWeight: '600',
			textTransform: 'none',
		},

		//? input
		input_regular: {
			fontFamily: 'Inter',
			fontSize: '12px',
			fontWeight: '400',
			lineHeight: '16px',
		},
		input_semi_bolt: {
			fontFamily: 'Inter',
			fontSize: '12px',
			fontWeight: '600',
		},
		input_bolt: {
			fontFamily: 'Inter',
			fontSize: '12px',
			fontWeight: '700',
			lineHeight: '16px',
		},

		//? log_in_or_sign_up
		log_in_or_sign_up_medium: {
			fontFamily: 'Inter',
			fontSize: '28px',
			fontWeight: '500',
		},
		log_in_or_sign_up_light: {
			fontFamily: 'Inter',
			fontSize: '18px',
			fontWeight: '300',
		},

		//? Not found page
		NOT_FOUND_PAGE_Big: {
			fontFamily: 'Inter',
			fontWeight: 'bold',
			fontSize: '48px',
			wordSpacing: '4px',
			letterSpacing: '1px',
		},
		NOT_FOUND_PAGE_little_underline: {
			fontFamily: 'Inter',
			fontWeight: '500',
			fontSize: '28px',
			textDecoration: 'underline',
			color: '#A8A6B3',
		},
	},
})

export default theme
