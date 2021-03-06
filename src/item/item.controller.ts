import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { User } from '../user.decorator';
import { ItemDTO } from './item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) {}

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }

  @Post()
  public async create(
    @User() user: User,
    @Body(new ValidationPipe({ transform: true })) dto: ItemDTO,
  ): Promise<ItemDTO> {
    return this.serv.create(dto, user);
  }
}
