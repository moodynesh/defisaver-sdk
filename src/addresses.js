

const actionAddresses = {
  'TaskExecutor': '0xb3e5371d55e1e84bfFE7D0b57Bd9c6A4C6b3C635',

  // utils
  'WrapEth': '0x9E702937F42Db2cE58342Ca5F213Ef33D51AEF6b',
  'UnwrapEth': '0x925b0C0663aaef2C6F603aD8B992a15adA83f1Cc',
  'PullToken': '0x795a89f6D4E97A959fe81aa22772441323783479',
  'SendToken': '0xBbe0D7f2AF01aE678f8A873CB2d2EB73871C9b5A',
  'SumInputs': '0xCdef35425579fc566B6Ee0499A79256ac88d25cf',

  // exchange
  'DFSSell': '0x9A765623F9De2D7dB26afb5f7Bb85592DF094CDB',
  'DFSBuy': '0x939dCad6A3D1fEACccB60Af90876D904468CbF66',

  // maker
  'McdGenerate': '0x28C568A2C7216e8b61C71527C4b9ce2b92d217aa',
  'McdGive': '0xD2dc5DA4172a3901C9f26c7cd29eFE656Fc20332',
  'McdMerge': '0x66c7f4C7e59b6e780142aaD5c9f427FA5F8dfFc6',
  'McdOpen': '0x6467a24950451b3abd6654Fb6d8ae01635dcFe00',
  'McdPayback': '0x5B1851De9E1FD9928dfC040714DB6204AF587581',
  'McdSupply': '0xD3C50623F44E97B59CFbfC1232146858be18e6cc',
  'McdWithdraw': '0x19654613812850081D80e7EC992e8F71DcbD30B4',

  // reflexer
  'ReflexerSupply': '0x24C537A93A9ab75b5A593BA0B2dc03200345A844',
  'ReflexerWithdraw': '0xcA99fB3430180E43bC1929a3a84d0500E3118e0A',
  'ReflexerPayback': '0x0c8320033340277791C5dCD9BC87d20f086BB34b',
  'ReflexerGenerate': '0x28E78093dF6d370Ca9ea1aC85668d8a097f09087',
  'ReflexerOpen': '0xcf174aFFbB7be200afa37Dfc4CD067ae3Cb91054',

  // aave
  'AaveBorrow': '0xEdBbF97C505309e5174E164fbec3cAE774d310Ea',
  'AavePayback': '0xA04dd7BbdA2DF9307654d3F91a252F911790773e',
  'AaveSupply': '0xC71113E9122465e8bCd42123f840Df99abaF29F1',
  'AaveWithdraw': '0xE06Fc1CBD78Eb0799d5B0ca62D51B065886e08FC',

  // compound
  'CompBorrow': '0xde1b05266f2D05Bf9216B76500583c2b7785b7e9',
  'CompClaim': '0xAA165C03fF61301b79f35649157f6738263739A3',
  'CompPayback': '0xaedCD157d570Edd1513c0dafaA8CD92198335AAC',
  'CompSupply': '0x1F22890C166B30cE8769b7B55354064C254e063F',
  'CompWithdraw': '0xD326a003bcfDbad0E9A4Ccc37a76Ce264345F38a',

  // flashloan
  'FLAaveV2': '0xa290BDae65638c083e860b05009f290140fc0379',
  'FLDyDx': '0x505079b4E049B9e641deb7E04D55e9457B8ad8Bc',

  // uniswap
  'UniSupply': '0xcAE220B5398AfAad75bfeb946164f6C23CF65A98',
  'UniWithdraw': '0x847aF4eFDf64E4F54Af95D3b867DfC92f4Ea91B4',

  // uniswap V3
  'UniCollectV3': '0x4D49FB2Cc0DF856b936CCA1816A9e6DD0ADFa232',
  'UniMintV3': '0x6d61b5c47995DF6DB7e444240ceD3Ea898B2d408',
  'UniSupplyV3': '0x1398Ea6151e8360Ed0515460214c84FeFf687C6F',
  'UniWithdrawV3': '0xe5FAB89bdC01130c686B35540531EB1cBbaE8ff3',

  // dydx
  'DyDxSupply': '0xA8D1C1eea86573cBcC919fbf28Db542bDfE7Ed5b',
  'DyDxWithdraw': '0x55AA33F42D79DbD3f1885b410e4796d641549bC3',

  // yearn
  'YearnSupply': '0x5499ecfEba3B481DB52696122e84b7319AaF743A',
  'YearnWithdraw': '0x97eA173b19aA2D1Bb34cDC12BE39388E6F65bDc7',

  // liquity
  'LiquityClose': '0x4Eb6e5C7fbf7b6850912f893B85bB87109E86a1f',
  'LiquityBorrow': '0x46e8fE6bbE3C08eCc250295583490be9ac97B969',
  'LiquityOpen': '0x50D69350E2629987551C563E19D29dee6Faf3A78',
  'LiquityPayback': '0x86eCa72dF81ae76AfF0dEeC01521154F33147e46',
  'LiquityWithdraw': '0x8CDA51bB0D7E03252d554Ba5Bbb9254f3deB8441',
  'LiquitySupply': '0x7d9157a022A263EFd34C867Fd261235D45B48453',
  'LiquitySPDeposit': '0x63A485F32e355ddA2275d6C6211A0A20817CDbfe',
  'LiquitySPWithdraw': '0xCD410b360639a546FE5535fe940c1F8bc62dE2c7',
  'LiquityStake': '0xF0782DE9d734e54aa080B985d6a9235880C48Fe5',
  'LiquityUnstake': '0xc39DdBa031D014BFC1E3b6158842Ffb43f8D47e9',
  'LiquityEthGainToTrove': '0x7D237902cc9aEa19b1fA33f76f3C7Fc5A12CD0Af',
  'LiquityClaim': '0x5a2E638DE65323c55f1245f920B84dB4603002eE',
  'LiquityRedeem': '0x6C5Dd88D033c8857254Cc94098BF75Ac275B17c7',

  // lido
  'LidoStake': '0x7ada5Af66c9b4b55a06A4B59A0DC41fcDca9353A',
};

const otherAddresses = {
  Empty: '0x0000000000000000000000000000000000000000',
  McdCdpManager: '0x5ef30b9986345249bc32d8928b7ee64de9435e39',
  BCdpManager: '0x3f30c2381CD8B917Dd96EB2f1A4F96D91324BBed',
  AaveDefaultMarket: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5',
  ProxyRegistry: '0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4',
  DFSProxyRegistry: '0x29474FdaC7142f9aB7773B8e38264FA15E3805ed',
  UniswapV3PositionManager : '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
}


const getAddr = (name) => {
  if (!actionAddresses[name] && !otherAddresses[name]) return otherAddresses.Empty;

  return actionAddresses[name] || otherAddresses[name];
};

module.exports = {
  getAddr,
  actionAddresses,
}
