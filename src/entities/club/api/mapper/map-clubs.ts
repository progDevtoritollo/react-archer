import { Club } from '../../types/club'
import { ClubDto } from '../dto/club.dto'

export const mapClub = (dto: ClubDto): Club => ({
	id: +dto.id.toString(),
	pictureUrl: dto.pictureUrl.toString(),
	name: dto.name.toString(),
	trainerName: dto.trainerName.toString(),
	trainerSur: dto.trainerSur.toString(),
	country: dto.country.toString(),
	memberAmount: dto.memberAmount.toString(),
})
