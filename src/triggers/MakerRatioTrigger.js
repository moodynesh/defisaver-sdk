const Action = require("../Action");
const {getAddr} = require("../addresses.js");

class MakerRatioTrigger extends Action {

  constructor(vaultId, ratio, state) {
    super("McdRatioTrigger", getAddr("McdRatioTrigger"), [["uint256", "uint256", "uint8"]], [[...arguments]]);
  }

  async getEthValue() {
    return this.args[0];
  }
}

module.exports = MakerRatioTrigger;
