const { ethers } = require('ethers');

const main = async () => {
  const provider = ethers.getDefaultProvider('mainnet', { infura: { projectId: 'ac60a83411294c00b1f6a91aa340b65d' } });
  const wallet = ethers.Wallet.createRandom().connect(provider);

  console.log(wallet.address);
  console.log(wallet.publicKey);
  console.log(wallet.privateKey);
  console.log((await wallet.getBalance()).toString());

  return { address: wallet.address, publicKey: wallet.publicKey, privateKey: wallet.privateKey, balalnce: (await wallet.getBalance()).toString() };
};

main();
