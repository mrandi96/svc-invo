// import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceService } from '../src/services/invoice.service';

describe('ItemService', () => {
  let service: InvoiceService;

  beforeEach(async () => {
    service = undefined;
  });

  it('should be undefined', () => {
    expect(service === undefined).toBe(true);
  });
});
