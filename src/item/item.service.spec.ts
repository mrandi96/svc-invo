// import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(async () => {
    service = undefined;
  });

  it('should be undefined', () => {
    expect(service === undefined).toBe(true);
  });
});
