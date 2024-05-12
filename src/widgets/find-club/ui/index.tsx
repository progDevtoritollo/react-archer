import { Box, Pagination, InputBase, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { FC, useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import { ClubCard } from '@/entities/club'
import PageLoader from '@/widgets/PageLoader'
import { usePageParam } from '@/shared/lib/use-page-params'
import { CountrySelect } from '@/shared/ui/country-picker'
import { clubApi } from '@/entities/club'

const DEFAULT_PAGE = 1
const DEFAULT_ITEMS_ON_SCREEN = 14

const FindClub: FC = () => {
	const itemsOnScreen = DEFAULT_ITEMS_ON_SCREEN
	const [page, setPage] = usePageParam(DEFAULT_PAGE)

	const [inputParam, setInputParam] = useState('')
	const [country, setCountry] = useState('')

	let isSearchParamEmpty = country === '' && inputParam === ''

	const {
		data: countries,
		isLoading: isLoadingCountries,
		isError: isErrorCountries,
	} = useQuery(clubApi.clubQueries.countriesList())

	const {
		data: clubs,
		isLoading: isLoadingClubs,
		isError: isErrorClubs,
		refetch,
	} = useQuery(clubApi.clubQueries.list(page, inputParam, country, itemsOnScreen))

	if (isErrorCountries) {
		return <Box>Something went wrong</Box>
	}

	const handleClickSearch = () => {
		refetch()
	}

	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setInputParam(event.target.value)
	}

	return (
		<Box>
			{isLoadingCountries && countries !== undefined ? (
				<Box>isLoadingCountries true</Box>
			) : (
				<Box>
					<Box
						sx={{ display: 'flex', flexDirection: 'row', m: 2, justifyContent: 'space-between' }}>
						<CountrySelect
							value={country}
							setCountry={value => {
								setCountry(value)
							}}
							ListCountriesFromServer={countries}
						/>
						{/* <SearchIcon /> */}
						<InputBase
							value={inputParam}
							onChange={handleChangeInput}
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
						<Button onClick={handleClickSearch}>Search</Button>
					</Box>
					<Box>
						{isSearchParamEmpty ? (
							<Box> Change search params to find some clubs </Box>
						) : (
							<Box>
								<Box>
									{/* {clubs.map(({ id, score }) => (
						<Link to={id}>
							<ClubCard id={id} name={club.name} score={score} userPhoto={user.pictureUrl} />
						</Link>
					))} */}
								</Box>
								<Box sx={{ display: 'flex', justifyContent: 'center' }}>
									<Pagination
										onChange={(_, page) => setPage(page)}
										page={page}
										count={clubs?.totalPages}
										variant="outlined"
										color="primary"
									/>
								</Box>
							</Box>
						)}
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default FindClub
