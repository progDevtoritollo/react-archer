import { FC } from 'react'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import { styled } from '@mui/material/styles'

// import { Google_Logo_Icon } from '@/app/assets/icons/Google_Logo_Icon.svg'

interface AppleAuthButtonProps {
	onClickAuth: React.MouseEventHandler<HTMLButtonElement>
}

const AppleButton = styled(Button)({
	color: '#FFFFFF',
	minWidth: '350px',
	borderRadius: '10px',
	// fontFamily: 'Roboto',
	letterSpacing: 0,
	fontWeight: 600,
	textTransform: 'none',
	fontSize: 16,
	padding: '15px 42px',
	lineHeight: 1.5,
	backgroundColor: '#000000',
	boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.084), 0px 2px 3px 0px rgba(0, 0, 0, 0.168)',
	'&:hover': {
		'& svg path': {
			fill: 'black',
		},
		backgroundColor: 'transparent',
		color: 'rgba(0, 0, 0, 0.54)',
	},
})

export const AppleAuthButton: FC<AppleAuthButtonProps> = ({ onClickAuth }) => {
	return (
		<AppleButton
			onClick={onClickAuth}
			startIcon={
				<Icon
					sx={{
						fontSize: 50,
					}}>
					<svg
						width="25"
						height="25"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect width="35" height="35" fill="none" />
						<path
							d="M21.2808 18.424C20.933 19.2275 20.5213 19.9672 20.0442 20.6472C19.394 21.5743 18.8616 22.216 18.4513 22.5724C17.8153 23.1573 17.1338 23.4568 16.4041 23.4739C15.8802 23.4739 15.2485 23.3248 14.513 23.0224C13.7752 22.7214 13.0972 22.5724 12.4772 22.5724C11.827 22.5724 11.1296 22.7214 10.3837 23.0224C9.63662 23.3248 9.03481 23.4824 8.57468 23.498C7.87491 23.5278 7.1774 23.2197 6.48118 22.5724C6.03681 22.1848 5.48099 21.5204 4.81515 20.5791C4.10075 19.5739 3.51342 18.4084 3.05329 17.0795C2.56051 15.6442 2.31348 14.2543 2.31348 12.9087C2.31348 11.3673 2.64654 10.0379 3.31366 8.92385C3.83796 8.029 4.53546 7.32312 5.40844 6.80493C6.28142 6.28674 7.22468 6.02267 8.24048 6.00578C8.7963 6.00578 9.52518 6.1777 10.431 6.51559C11.3342 6.85462 11.9141 7.02655 12.1684 7.02655C12.3585 7.02655 13.0028 6.82552 14.0949 6.42473C15.1278 6.05305 15.9995 5.89916 16.7136 5.95978C18.6487 6.11595 20.1024 6.87876 21.0693 8.25303C19.3386 9.30163 18.4826 10.7703 18.4996 12.6544C18.5152 14.122 19.0476 15.3432 20.0939 16.3129C20.5681 16.7629 21.0977 17.1107 21.6868 17.3578C21.5591 17.7283 21.4242 18.0832 21.2808 18.424V18.424ZM16.8428 0.960131C16.8428 2.11039 16.4226 3.18439 15.5849 4.17847C14.5741 5.36023 13.3514 6.04311 12.0256 5.93536C12.0087 5.79736 11.9989 5.65213 11.9989 5.49951C11.9989 4.39526 12.4796 3.21349 13.3333 2.24724C13.7595 1.75801 14.3015 1.35122 14.9588 1.02671C15.6147 0.707053 16.2352 0.530273 16.8187 0.5C16.8357 0.653772 16.8428 0.807554 16.8428 0.960116V0.960131Z"
							fill="white"
						/>
					</svg>
				</Icon>
			}>
			Continue with Apple
		</AppleButton>
	)
}
