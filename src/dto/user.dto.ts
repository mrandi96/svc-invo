import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User, UserType } from '../models/user.entity';
import { User as UserDecorator } from '../decorators/user.decorator';

export class UserDTO implements Readonly<UserDTO> {
  @ApiProperty({ required: false })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ required: true })
  @IsString()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;

  @ApiProperty({ required: true })
  @IsString()
  homeAddress: string;

  @ApiProperty({ required: false })
  @IsString()
  imageUrl: string;

  @ApiProperty({ required: false })
  @IsString()
  userType: UserType;

  public static from(dto: Partial<UserDTO>) {
    const it = new UserDTO();
    it.name = dto.name;
    it.phoneNumber = dto.phoneNumber;
    it.email = dto.email;
    it.password = dto.password;
    it.homeAddress = dto.password;
    it.imageUrl = dto.imageUrl;
    it.userType = dto.userType;

    return it;
  }

  public static fromEntity(entity: User) {
    return this.from({
      name: entity.name,
      phoneNumber: entity.phoneNumber,
      email: entity.email,
      password: entity.password,
      homeAddress: entity.password,
      imageUrl: entity.imageUrl,
      userType: entity.userType,
    });
  }

  public toEntity(user: UserDecorator = null) {
    const it = new User();
    it.name = this.name;
    it.phoneNumber = this.phoneNumber;
    it.email = this.email;
    it.password = this.password;
    it.homeAddress = this.password;
    it.imageUrl = this.imageUrl;
    it.userType = this.userType;
    it.createdAt = new Date();
    it.updatedAt = new Date();
    it.createdBy = user?.name;
    it.updatedBy = user?.name;

    return it;
  }
}
