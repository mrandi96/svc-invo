// import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';

describe('ItemController', () => {
  let controller: ItemController;

  beforeEach(async () => {
    controller = undefined;
  });

  it('should be undefined', () => {
    expect(controller === undefined).toBe(true);
  });
});
