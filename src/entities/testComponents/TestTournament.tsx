import React from "react";

import {
	SingleEliminationBracket,
	Match, SVGViewer
} from '@g-loot/react-tournament-brackets';

const TestTournament = () => {

	const matches = [
		{
			id: 19753,
			nextMatchId: null,
			tournamentRoundText: "3",
			startTime: "2021-05-30",
			state: "SCHEDULED",
			participants: [],
		},
		{
			id: 19754,
			nextMatchId: 19753,
			tournamentRoundText: "2",
			startTime: "2021-05-30",
			state: "SCHEDULED",
			participants: [
				{
					id: "14754a1a-932c-4992-8dec-f7f94a339960",
					resultText: null,
					isWinner: false,
					status: null,
					name: "CoKe BoYz",
					picture: "teamlogos/client_team_default_logo",
				},
			],
		},
		{
			id: 19755,
			nextMatchId: 19754,
			tournamentRoundText: "1",
			startTime: "2021-05-30",
			state: "SCORE_DONE",
			participants: [
				{
					id: "14754a1a-932c-4992-8dec-f7f94a339960",
					resultText: "Won",
					isWinner: true,
					status: "PLAYED",
					name: "CoKe BoYz",
					picture: "teamlogos/client_team_default_logo",
				},
				{
					id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
					resultText: "Lost",
					isWinner: false,
					status: "PLAYED",
					name: "Aids Team",
					picture: "teamlogos/client_team_default_logo",
				},
			],
		},
		{
			id: 19756,
			nextMatchId: 19754,
			tournamentRoundText: "1",
			startTime: "2021-05-30",
			state: "RUNNING",
			participants: [
				{
					id: "d8b9f00a-0ffa-4527-8316-da701894768e",
					resultText: null,
					isWinner: false,
					status: null,
					name: "Art of kill",
					picture: "teamlogos/client_team_default_logo",
				},
			],
		},
		{
			id: 19757,
			nextMatchId: 19753,
			tournamentRoundText: "2",
			startTime: "2021-05-30",
			state: "SCHEDULED",
			participants: [],
		},
		{
			id: 19758,
			nextMatchId: 19757,
			tournamentRoundText: "1",
			startTime: "2021-05-30",
			state: "SCHEDULED",
			participants: [
				// Здесь должны быть данные участников
			],
		},
		{
			id: 19759,
			nextMatchId: 19757,
			tournamentRoundText: "1",
			startTime: "2021-05-30",
			state: "SCHEDULED",
			participants: [
				{
					id: "42fecd89-dc83-4821-80d3-718acb50a30c",
					resultText: null,
					isWinner: false,
					status: null,
					name: "BLUEJAYS",
					picture: "teamlogos/client_team_default_logo",
				},
				{
					id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
					resultText: null,
					isWinner: false,
					status: null,
					name: "Bosphorus",
					picture: "teamlogos/r7zn4gr8eajivapvjyzd",
				},
			],
		},
	];

	return (
		<SingleEliminationBracket
			matches={matches}
			matchComponent={Match}
			svgWrapper={({ children, ...props }) => (
				<SVGViewer width={1220} height={800} {...props}>
					{children}
				</SVGViewer>
			)}
		/>)
}

export default TestTournament;