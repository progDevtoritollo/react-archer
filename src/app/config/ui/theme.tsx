import { createTheme } from '@mui/material/styles'
import customColors from './palette'

declare module '@mui/material/styles' {
	interface Palette {
		customColors: CustomPalette
	}
	interface PaletteOptions {
		customColors?: CustomPaletteOptions
	}
}

// typography
declare module '@mui/material/styles' {
	interface TypographyVariants {
		logo: React.CSSProperties

		paragraph1: React.CSSProperties
		paragraph2: React.CSSProperties
		paragraph3: React.CSSProperties
		paragraph4: React.CSSProperties

		TextInputField: React.CSSProperties
		TextField: React.CSSProperties
		textSearch: React.CSSProperties

		CapsLockHighlight: React.CSSProperties
		UnderlinedText: React.CSSProperties
	}
	interface TypographyVariantsOptions {
		logo?: React.CSSProperties
		h1?: React.CSSProperties
		h2?: React.CSSProperties
		h3?: React.CSSProperties
		h4?: React.CSSProperties
		paragraph1?: React.CSSProperties
		paragraph2?: React.CSSProperties
		paragraph3?: React.CSSProperties
		paragraph4?: React.CSSProperties

		CapsLockHighlight?: React.CSSProperties

		TextInputField?: React.CSSProperties
		TextField?: React.CSSProperties
		UnderlinedText?: React.CSSProperties
		textSearch?: React.CSSProperties
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		logo: true
		h1: true
		h2: true
		h3: true
		h4: true
		paragraph1: true
		paragraph2: true
		paragraph3: true
		paragraph4: true
		body1: true

		CapsLockHighlight: true
		button: true
		TextInputField: true
		TextField: true
		UnderlinedText: true
		textSearch: true

		h5: false
		h6: false
		subtitle1: false
		subtitle2: false
		body2: false
		caption: false
		overline: false
	}
}

const theme = createTheme({
	palette: {
		customColors,
		background: {
			default: '#FFFCFC',
		},
		divider: '#F0F0F0',

		// common: {
		// 	black: '#000',
		// 	white: '#fff',
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
			fontSize: '28px',
			fontWeight: '500',
			lineHeight: '33px',
		},
		h2: {
			fontFamily: 'Inter',
			fontSize: '20px',
			fontWeight: '500',
		},
		h3: {
			fontFamily: 'Inter',
			fontSize: '18px',
			fontWeight: '600',
		},
		h4: {
			fontFamily: 'Inter',
			fontSize: '17px',
			fontWeight: '600',
		},
		paragraph1: {
			fontFamily: 'Inter',
			fontSize: '17px',
			fontWeight: '500',
		},
		paragraph2: {
			fontFamily: 'Inter',
			fontSize: '16px',
			fontWeight: '500',
		},
		paragraph3: {
			fontFamily: 'Inter',
			fontSize: '14px',
			fontWeight: '500',
		},
		paragraph4: {
			fontFamily: 'Inter',
			fontSize: '12px',
			fontWeight: '500',
		},
		body1: { fontFamily: 'Inter', fontSize: '16px', fontWeight: '500' },

		button: {
			fontFamily: 'Inter',
			fontSize: '12px',
			fontWeight: '600',
			textTransform: 'none',
		},

		//? input
		TextInputField: {
			fontFamily: 'Inter',
			fontSize: '12px',
			fontWeight: '400',
			lineHeight: '16px',
		},
		TextField: {
			fontFamily: 'Inter',
			fontSize: '12px',
			fontWeight: '600',
			lineHeight: '16px',
		},

		CapsLockHighlight: {
			fontFamily: 'Inter',
			fontWeight: '700',
			fontSize: '48px',
			wordSpacing: '4px',
			letterSpacing: '1px',
		},
		UnderlinedText: {
			fontFamily: 'Inter',
			fontWeight: '600',
			fontSize: '20px',
			textDecoration: 'underline',
			// color: '#A8A6B3',
		},
		textSearch: {
			fontFamily: 'Inter',
			fontSize: '12px',
			fontWeight: '400',
			lineHeight: '16px',
		},
	},
})

export default theme
