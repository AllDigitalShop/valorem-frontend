import { ethers } from 'ethers';
import contractABI from './contractABI';

export default async (provider = {}) => {
  const ethersWrappedProvider = new ethers.providers.Web3Provider(provider);
  const contractURI = process.env.contract.address[process.env.NODE_ENV];
  const jsonRPCProvider = new ethers.providers.JsonRpcProvider(contractURI?.url);

  return {
    _connection: ethersWrappedProvider.connection,
    ethers: ethersWrappedProvider,
    network: await ethersWrappedProvider.getNetwork(),
    accounts: await ethersWrappedProvider.listAccounts(),
    signer: await ethersWrappedProvider.getSigner(),
    jsonRPCProvider,
    gasPrice: await ethersWrappedProvider.getGasPrice(),
    contract: new ethers.Contract(
      contractURI?.address,
      contractABI,
      jsonRPCProvider,
    ),
  };
};