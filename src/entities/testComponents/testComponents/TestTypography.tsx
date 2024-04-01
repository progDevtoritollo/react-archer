import { Typography, Button } from '@mui/material'

const TestTournament = () => {
	return (
		<>
			<Typography variant="logo" component="h1">
				Archer
			</Typography>
			<Typography variant="h1">Headline 1</Typography>
			<Typography variant="h2">Headline 2</Typography>
			<Typography variant="h3">Headline 3</Typography>
			<Typography variant="h4">Headline 4</Typography>
			<Typography variant="paragraph1">Paragraph 1</Typography>
			<Typography variant="paragraph2">Paragraph 2</Typography>
			<Typography variant="paragraph3">Paragraph 3</Typography>
			<Typography variant="paragraph4">Paragraph 4</Typography>
			<Typography variant="body1">Body-1</Typography>
			<Button>
				<Typography variant="button">Button</Typography>
			</Button>

			<Typography variant="TextField">Text field</Typography>
			<Typography variant="textSearch">Text search</Typography>
			<Typography variant="TextInputField">Text input field</Typography>
			<Typography variant="CapsLockHighlight">Caps Lock Highlight</Typography>
			<Typography variant="UnderlinedText">Underlined text</Typography>
		</>
	)
}

export default TestTournament
