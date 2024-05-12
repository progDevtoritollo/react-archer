import { Box, Pagination, InputBase, Button } from '@mui/material'
import { FC, useState, ChangeEvent } from 'react'
import { useQuery } from '@tanstack/react-query'
// import SearchIcon from '@mui/icons-material/Search'

import { ClubCard } from '@/entities/club'
import PageLoader from '@/widgets/PageLoader'

import { usePageParam } from '@/shared/lib/use-page-params'
import { CountrySelect } from '@/shared/ui/country-picker'
import { clubApi } from '@/entities/club'

const DEFAULT_PAGE = 1
const DEFAULT_ITEMS_ON_SCREEN = 8

const FindClub: FC = () => {
	const itemsOnScreen = DEFAULT_ITEMS_ON_SCREEN
	const [page, setPage] = usePageParam(DEFAULT_PAGE)

	const [inputParam, setInputParam] = useState('')
	const [country, setCountry] = useState('')

	const {
		data: countries,
		isLoading: isLoadingCountries,
		isError: isErrorCountries,
	} = useQuery(clubApi.clubQueries.countriesList())

	const {
		data: ListClubs,
		isLoading: isLoadingClubs,
		// isError: isErrorClubs,
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
						<Box>
							{!isLoadingClubs && ListClubs !== undefined ? (
								<Box>
									<Box sx={{ mx: 8 }}>
										{ListClubs.clubs.map(({ id, name, image, trainer, country, city }) => (
											<ClubCard
												id={id}
												name={name}
												image={image}
												trainer={trainer}
												country={country}
												city={city}
											/>
										))}
									</Box>
									<Box sx={{ display: 'flex', justifyContent: 'center' }}>
										<Pagination
											onChange={(_, page) => setPage(page)}
											page={page}
											count={ListClubs?.totalPages}
											variant="outlined"
											color="primary"
										/>
									</Box>
								</Box>
							) : (
								<PageLoader />
							)}
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default FindClub
