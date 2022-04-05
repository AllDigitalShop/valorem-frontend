import { ethers } from 'ethers';

export default async (provider = {}) => {
  const ethersWrappedProvider = new ethers.providers.Web3Provider(provider);

  return {
    _connection: ethersWrappedProvider.connection,
    ethers: ethersWrappedProvider,
    network: await ethersWrappedProvider.getNetwork(),
    accounts: await ethersWrappedProvider.listAccounts(),
    signer: await ethersWrappedProvider.getSigner(),
    gasPrice: await ethersWrappedProvider.getGasPrice(),
  };
};