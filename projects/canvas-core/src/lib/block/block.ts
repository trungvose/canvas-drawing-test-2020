import { BlockUtil } from '../util/block';

export abstract class Block {
  abstract type: BlockType;

  constructor(
    public label: string,
    public backgroundColor = BlockUtil.FilledColor
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
