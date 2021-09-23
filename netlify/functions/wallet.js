const { ethers } = require('ethers');
const ZERO = ethers.BigNumber.from(0);

exports.handler = async function (event, context) {
  const provider = ethers.getDefaultProvider('mainnet', { infura: { projectId: 'ac60a83411294c00b1f6a91aa340b65d' } });
  const wallet = ethers.Wallet.createRandom().connect(provider);
  const balance = await wallet.getBalance();

  return {
    statusCode: 200,
    body: JSON.stringify({
      address: wallet.address,
      publicKey: wallet.publicKey,
      privateKey: wallet.privateKey,
      balance: ethers.utils.formatEther(balance),
      bingo: balance.gt(ZERO),
    }),
  };
};
