import { BlockColor } from '../util/color';
import { Block, BlockType } from './block';

export class FilledBlock extends Block {
  type: BlockType;

  constructor(label: string, backgroundColor = BlockColor.White) {
    super(label, backgroundColor);
    this.type = BlockType.Filled;
  }
}
