import { BlockUtil } from '../util/block';
import { Block, BlockType } from './block';

export class FilledBlock extends Block {
  type: BlockType;

  constructor(label: string, backgroundColor = BlockUtil.FilledColor) {
    super(label, backgroundColor);
    this.type = BlockType.Filled;
  }
}
