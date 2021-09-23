const { ethers } = require('ethers');


exports.handler = async function (event, context) {
  const provider = ethers.getDefaultProvider('mainnet', { infura: { projectId: 'ac60a83411294c00b1f6a91aa340b65d' } });
  const wallet = ethers.Wallet.createRandom().connect(provider);


  return {
    statusCode: 200,
    body: JSON.stringify({
      address: wallet.address,
      publicKey: wallet.publicKey,
      privateKey: wallet.privateKey,
      balalnce: (await wallet.getBalance()).toString(),
    })
};
