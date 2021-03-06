import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user.decorator';
import { Repository } from 'typeorm';
import { Item } from '../models/item.entity';
import { ItemDTO } from './item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly repo: Repository<Item>,
  ) {}

  public async getAll(): Promise<ItemDTO[]> {
    return await this.repo
      .find()
      .then((items) => items.map((e) => ItemDTO.fromEntity(e)));
  }

  public async create(dto: ItemDTO, user: User): Promise<ItemDTO> {
    return this.repo
      .save(dto.toEntity(user))
      .then((e) => ItemDTO.fromEntity(e));
  }
}
