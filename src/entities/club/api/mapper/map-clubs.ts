import { Club } from '../../types/club'
import { ClubDto } from '../dto/club.dto'

export const mapClub = (dto: ClubDto): Club => ({
	id: +dto.id.toString(),
	image: dto.image.toString(),
	name: dto.name.toString(),
	trainer: dto.trainer.toString(),
	country: dto.country.toString(),
	city: dto.city.toString(),
})
