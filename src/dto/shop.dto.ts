import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { Shop } from '../models/shop.entity';
import { User } from '../decorators/user.decorator';

export class ShopDTO implements Readonly<ShopDTO> {
  @ApiProperty({ required: false })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  shopPhoneNumber: string;

  @ApiProperty({ required: true })
  @IsInt()
  lat: number;

  @ApiProperty({ required: true })
  @IsInt()
  long: number;

  @ApiProperty({ required: false })
  @IsString()
  imageUrl: string;

  @ApiProperty({ required: false })
  @IsString()
  invoiceFormat: string;

  public static from(dto: Partial<ShopDTO>) {
    const it = new ShopDTO();
    it.name = dto.name;
    it.shopPhoneNumber = dto.shopPhoneNumber;
    it.lat = dto.lat;
    it.long = dto.long;
    it.imageUrl = dto.imageUrl;
    it.invoiceFormat = dto.invoiceFormat;

    return it;
  }

  public static fromEntity(entity: Shop) {
    return this.from({
      name: entity.name,
      shopPhoneNumber: entity.shopPhoneNumber,
      lat: entity.lat,
      long: entity.long,
      imageUrl: entity.imageUrl,
      invoiceFormat: entity.invoiceFormat,
    });
  }

  public toEntity(user: User = null) {
    const it = new Shop();
    it.name = this.name;
    it.shopPhoneNumber = this.shopPhoneNumber;
    it.lat = this.lat;
    it.long = this.long;
    it.imageUrl = this.imageUrl;
    it.invoiceFormat = this.invoiceFormat;
    it.createdAt = new Date();
    it.updatedAt = new Date();
    it.createdBy = user?.name;
    it.updatedBy = user?.name;

    return it;
  }
}
