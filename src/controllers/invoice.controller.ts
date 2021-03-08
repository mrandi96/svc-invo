import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { User } from '../decorators/user.decorator';
import { InvoiceDTO } from '../dto/invoice.dto';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private serv: InvoiceService) {}

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }

  @Get('/:id')
  public async getOneById(@Param('id') id: number) {
    try {
      return await this.serv.getOneById(id);
    } catch (e) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  public async create(
    @User() user: User,
    @Body(new ValidationPipe({ transform: true })) dto: InvoiceDTO,
  ): Promise<InvoiceDTO> {
    return this.serv.create(dto, user);
  }
}
