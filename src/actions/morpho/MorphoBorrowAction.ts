import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoBorrowAction - Borrow token from morpho on behalf of proxy
 *
 * @category Morpho
 */
export class MorphoBorrowAction extends Action {
  /**
   * @param tokenAddr - Address of Token
   * @param amount - Amount to borrow
   * @param to - Borrowed tokens will be sent to this address
   */
  constructor(tokenAddr:EthAddress, amount:uint256, to:EthAddress) {
    super('MorphoBorrow', getAddr('MorphoBorrow'), ['address', 'uint256','address'], [tokenAddr, amount, to]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
