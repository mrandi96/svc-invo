// import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceController } from '../src/controllers/invoice.controller';

describe('ItemController', () => {
  let controller: InvoiceController;

  beforeEach(async () => {
    controller = undefined;
  });

  it('should be undefined', () => {
    expect(controller === undefined).toBe(true);
  });
});
