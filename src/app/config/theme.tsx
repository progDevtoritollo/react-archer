import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

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
	}
	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		logo?: React.CSSProperties
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		logo: true
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
			fontFamily: 'Brygada 1918',
			// fontSize: '3rem',
		},
		h1: {
			// fontSize: '3rem',
		},
		h2: {
			// fontSize: '3rem',
		},
		h3: {
			fontSize: 14,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
		},
		h4: {
			// fontSize: '3rem',
		},
		h5: {
			// fontSize: '3rem',
		},
		h6: {
			// fontSize: '3rem',
		},
		subtitle1: {
			// fontSize: 12,
		},
		subtitle2: {
			// fontSize: 12,
		},
		body1: {
			// fontWeight: 500,
		},
		body2: {
			// fontWeight: 500,
		},
		button: {
			// fontStyle: 'italic',
		},
		caption: {
			// fontStyle: 'italic',
		},
		overline: {
			// fontStyle: 'italic',
		},
	},
})

export default theme
