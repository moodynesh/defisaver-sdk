

const actionAddresses = {
  'TaskExecutor': '0xb3e5371d55e1e84bfFE7D0b57Bd9c6A4C6b3C635',

  // utils
  'WrapEth': '0x9E702937F42Db2cE58342Ca5F213Ef33D51AEF6b',
  'UnwrapEth': '0x925b0C0663aaef2C6F603aD8B992a15adA83f1Cc',
  'PullToken': '0x795a89f6D4E97A959fe81aa22772441323783479',
  'SendToken': '0xBbe0D7f2AF01aE678f8A873CB2d2EB73871C9b5A',
  'SumInputs': '0xCdef35425579fc566B6Ee0499A79256ac88d25cf',
  'SubInputs': '0x3f71c5b806c2aCFA88bd7Ae5F7f8A14121E0FcA6',
  'ChangeProxyOwner': '0x32cEdFfF6e64f6cD1907Ae0b27b78c36320587E7',

  // exchange
  'DFSSell': '0x9A765623F9De2D7dB26afb5f7Bb85592DF094CDB',
  'DFSBuy': '0x939dCad6A3D1fEACccB60Af90876D904468CbF66',

  // maker
  'McdGenerate': '0x28C568A2C7216e8b61C71527C4b9ce2b92d217aa',
  'McdGive': '0xD2dc5DA4172a3901C9f26c7cd29eFE656Fc20332',
  'McdMerge': '0x66c7f4C7e59b6e780142aaD5c9f427FA5F8dfFc6',
  'McdOpen': '0x6467a24950451b3abd6654Fb6d8ae01635dcFe00',
  'McdPayback': '0xF8811168BDb3665de94c05B8DbA42588D038ce1b',
  'McdSupply': '0xD3C50623F44E97B59CFbfC1232146858be18e6cc',
  'McdWithdraw': '0x19654613812850081D80e7EC992e8F71DcbD30B4',

  // reflexer
  'ReflexerSupply': '0x24C537A93A9ab75b5A593BA0B2dc03200345A844',
  'ReflexerWithdraw': '0xcA99fB3430180E43bC1929a3a84d0500E3118e0A',
  'ReflexerPayback': '0x0c8320033340277791C5dCD9BC87d20f086BB34b',
  'ReflexerGenerate': '0x28E78093dF6d370Ca9ea1aC85668d8a097f09087',
  'ReflexerOpen': '0xcf174aFFbB7be200afa37Dfc4CD067ae3Cb91054',
  'ReflexerNativeUniV2SaviourDeposit':'0x5F66CC360657Bf224aa280Ae104550b5042E185a',
  'ReflexerNativeUniV2SaviourGetReserves':'0x9C7518F7a0f5bC4D57702fcE8C0778F7Fb2f09f8',
  'ReflexerNativeUniV2SaviourWithdraw':'0x6a61363243Cad1BE5caaE5e53284520592deB154',

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
  'FLAaveV2': '0x46aafdbc76a8b412909985d0a2c51073ff33c02e',
  'FLDyDx': '0x973065599BACa33FC9CAD2823710f1332D2B7805',

  // uniswap
  'UniSupply': '0xcAE220B5398AfAad75bfeb946164f6C23CF65A98',
  'UniWithdraw': '0x847aF4eFDf64E4F54Af95D3b867DfC92f4Ea91B4',

  // uniswap V3
  'UniCollectV3': '0x4D49FB2Cc0DF856b936CCA1816A9e6DD0ADFa232',
  'UniMintV3': '0x488794Aa06Ec668fDeC29375CB8B6629f4692B0B',
  'UniSupplyV3': '0x1dc3C2c16195bD6e49f6ED05F1f482c3C7FD35Af',
  'UniWithdrawV3': '0xe5FAB89bdC01130c686B35540531EB1cBbaE8ff3',
  'UniCreatePoolV3': '0xAD599cA05C7295a0cbc5CD696BF3f7E633402C99',

  // dydx
  'DyDxSupply': '0xA8D1C1eea86573cBcC919fbf28Db542bDfE7Ed5b',
  'DyDxWithdraw': '0x55AA33F42D79DbD3f1885b410e4796d641549bC3',

  // yearn
  'YearnSupply': '0x3B8538B070a0890ef7E13FF60c9d19F893a93B8a',
  'YearnWithdraw': '0x5BDf949c3a74E4F78328f6ad1F3697CC8edbe1A2',

  // liquity
  'LiquityClose': '0x4Eb6e5C7fbf7b6850912f893B85bB87109E86a1f',
  'LiquityBorrow': '0x46e8fE6bbE3C08eCc250295583490be9ac97B969',
  'LiquityOpen': '0x50D69350E2629987551C563E19D29dee6Faf3A78',
  'LiquityPayback': '0x86eCa72dF81ae76AfF0dEeC01521154F33147e46',
  'LiquityWithdraw': '0x8CDA51bB0D7E03252d554Ba5Bbb9254f3deB8441',
  'LiquitySupply': '0x7d9157a022A263EFd34C867Fd261235D45B48453',
  'LiquitySPDeposit': '0x20D85391A69E9906b67238cb82E51114dE7116a9',
  'LiquitySPWithdraw': '0x621ac2A927cc9323C23f7792e8FD25aAbc9cC04B',
  'LiquityStake': '0xF0782DE9d734e54aa080B985d6a9235880C48Fe5',
  'LiquityUnstake': '0xc39DdBa031D014BFC1E3b6158842Ffb43f8D47e9',
  'LiquityEthGainToTrove': '0x60427bD08785527FDca7d84d2A75871273E9F209',
  'LiquityClaim': '0x5a2E638DE65323c55f1245f920B84dB4603002eE',
  'LiquityRedeem': '0x6C5Dd88D033c8857254Cc94098BF75Ac275B17c7',

  // lido
  'LidoStake': '0x71D44c05B94438fe09a4A7F4dB75fb421dEC1067',

  // insta
  'ClaimInstMaker': '0x15E22A8160F0bDb619C6846C982F8D208A5670D2',

  // balancer
  'BalancerV2Supply': '0xD78E5D95A28a67F7851b0a94505790813A92E405',
  'BalancerV2Withdraw': '0xCcf4b96407BEF25D7df1c95045CCF64950e73E97',
  'BalancerV2Claim': '0x259Ae83567858B7960d2De0D00F3717a764aD73B',
};

const otherAddresses = {
  Empty: '0x0000000000000000000000000000000000000000',
  McdCdpManager: '0x5ef30b9986345249bc32d8928b7ee64de9435e39',
  BCdpManager: '0x3f30c2381CD8B917Dd96EB2f1A4F96D91324BBed',
  AaveDefaultMarket: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5',
  ProxyRegistry: '0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4',
  DFSProxyRegistry: '0x29474FdaC7142f9aB7773B8e38264FA15E3805ed',
  UniswapV3PositionManager : '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  RaiWethUniV2LPToken : '0x8aE720a71622e824F576b4A8C03031066548A3B1',
  BalancerToken : '0xba100000625a3754423978a60c9317c58a424e3D',
}


const getAddr = (name) => {
  if (!actionAddresses[name] && !otherAddresses[name]) return otherAddresses.Empty;

  return actionAddresses[name] || otherAddresses[name];
};

module.exports = {
  getAddr,
  actionAddresses,
}
