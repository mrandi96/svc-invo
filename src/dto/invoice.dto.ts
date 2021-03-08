import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Invoice } from '../models/invoice.entity';
import { User } from '../decorators/user.decorator';

export class InvoiceDTO implements Readonly<InvoiceDTO> {
  @ApiProperty({ required: false })
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  invoiceNumber: string;

  public static from(dto: Partial<InvoiceDTO>) {
    const it = new InvoiceDTO();
    it.invoiceNumber = dto.invoiceNumber;

    return it;
  }

  public static fromEntity(entity: Invoice) {
    return this.from({
      invoiceNumber: entity.invoiceNumber,
    });
  }

  public toEntity(user: User = null) {
    const it = new Invoice();
    it.invoiceNumber = this.invoiceNumber;
    it.createdAt = new Date();
    it.createdBy = user?.name;
    it.updatedBy = user?.name;

    return it;
  }
}
