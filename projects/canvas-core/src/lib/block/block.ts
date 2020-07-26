import { BlockColor } from '../util/color';

export abstract class Block {
  abstract type: BlockType;

  constructor(
    public label: string,
    public backgroundColor = BlockColor.White,
    public color = BlockColor.Black
  ) {}

  get isEmpty() {
    return this.type === BlockType.Empty;
  }

  get isFilled() {
    return this.type === BlockType.Filled;
  }
}

export enum BlockType {
  Empty = 'Empty',
  Filled = 'Filled',
}
