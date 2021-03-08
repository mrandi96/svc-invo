import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../decorators/user.decorator';
import { Repository } from 'typeorm';
import { Invoice } from '../models/invoice.entity';
import { InvoiceDTO } from '../dto/invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice) private readonly repo: Repository<Invoice>,
  ) {}

  public async getAll(): Promise<InvoiceDTO[]> {
    return await this.repo
      .find()
      .then((items) => items.map((e) => InvoiceDTO.fromEntity(e)));
  }

  public async getOneById(id: number): Promise<InvoiceDTO> {
    return await this.repo
      .findOneOrFail(id)
      .then((item) => InvoiceDTO.fromEntity(item));
  }

  public async create(dto: InvoiceDTO, user: User): Promise<InvoiceDTO> {
    return this.repo
      .save(dto.toEntity(user))
      .then((e) => InvoiceDTO.fromEntity(e));
  }
}
