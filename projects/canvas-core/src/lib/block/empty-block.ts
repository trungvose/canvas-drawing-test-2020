import { Block, BlockType } from './block';

export class EmptyBlock extends Block {
  type: BlockType;
  constructor() {
    super('');
    this.type = BlockType.Empty;
  }
}
