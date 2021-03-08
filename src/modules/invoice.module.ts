import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceController } from '../controllers/invoice.controller';
import { Invoice } from '../models/invoice.entity';
import { InvoiceService } from '../services/invoice.service';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice])],
  providers: [InvoiceService],
  controllers: [InvoiceController],
  exports: [],
})
export class InvoiceModule {}
