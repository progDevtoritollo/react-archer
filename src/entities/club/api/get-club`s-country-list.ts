import { apiClient } from '@/shared/api/base'
import { CountriesDto } from './dto/country.dto'

export const getCountryList = async (): Promise<CountriesDto> => {
	return await apiClient.get<CountriesDto>('/api/club/countries')
}
