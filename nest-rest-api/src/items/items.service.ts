import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '34343434356',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '34343434356',
      name: 'Item Two',
      qty: 50,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
