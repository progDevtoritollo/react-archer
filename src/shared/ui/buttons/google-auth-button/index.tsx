import { FC } from 'react'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import { styled } from '@mui/material/styles'

// import { Google_Logo_Icon } from '@/app/assets/icons/Google_Logo_Icon.svg'

interface GoogleAuthButtonProps {
	onClick: () => void
}

const GoogleButton = styled(Button)({
	color: 'rgba(0, 0, 0, 0.54)',
	minWidth: '350px',
	borderRadius: '10px',
	// fontFamily: 'Roboto',
	letterSpacing: 0,
	fontWeight: 600,
	textTransform: 'none',
	fontSize: 16,
	padding: '15px 42px',
	lineHeight: 1.5,
	backgroundColor: '#FFFFF',
	boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.084), 0px 2px 3px 0px rgba(0, 0, 0, 0.168)',
})

export const GoogleAuthButton: FC<GoogleAuthButtonProps> = () => {
	return (
		<GoogleButton
			startIcon={
				<Icon sx={{ fontSize: 50 }}>
					<svg
						width="25"
						height="25"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g id="Google Logo">
							<rect width="24" height="24" fill="none" />
							<g id="logo googleg 48dp">
								<path
									id="Shape"
									fillRule="evenodd"
									clipRule="evenodd"
									d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90912H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7637 23.04 12.2614Z"
									fill="#4285F4"
								/>
								<path
									id="Shape_2"
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.9995 23.4998C15.1045 23.4998 17.7077 22.47 19.6104 20.7137L15.8938 17.8282C14.864 18.5182 13.5467 18.9259 11.9995 18.9259C9.00425 18.9259 6.46902 16.903 5.5647 14.1848H1.72266V17.1644C3.61493 20.9228 7.50402 23.4998 11.9995 23.4998Z"
									fill="#34A853"
								/>
								<path
									id="Shape_3"
									fillRule="evenodd"
									clipRule="evenodd"
									d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z"
									fill="#FBBC05"
								/>
								<path
									id="Shape_4"
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.9995 5.07386C13.6879 5.07386 15.2038 5.65409 16.3956 6.79364L19.694 3.49523C17.7024 1.63955 15.0992 0.5 11.9995 0.5C7.50402 0.5 3.61493 3.07705 1.72266 6.83545L5.5647 9.815C6.46902 7.09682 9.00425 5.07386 11.9995 5.07386Z"
									fill="#EA4335"
								/>
							</g>
						</g>
					</svg>
				</Icon>
			}>
			Continue with Google
		</GoogleButton>
	)
}
