import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { Item } from '../models/item.entity';
import { User } from '../user.decorator';

export class ItemDTO implements Readonly<ItemDTO> {
  @ApiProperty({ required: false })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  description: string;

  public static from(dto: Partial<ItemDTO>) {
    const it = new ItemDTO();
    it.name = dto.name;
    it.description = dto.description;

    return it;
  }

  public static fromEntity(entity: Item) {
    return this.from({
      name: entity.name,
      description: entity.description,
    });
  }

  public toEntity(user: User = null) {
    const it = new Item();
    it.name = this.name;
    it.description = this.description;
    it.createdAt = new Date();
    it.createdBy = user?.name;
    it.updatedBy = user?.name;

    return it;
  }
}
