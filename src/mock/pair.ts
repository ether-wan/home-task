import { zeroAddress } from "viem";

interface Pair {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
}

export const mockPairs : Array<Pair> = [
    {
      id: 1,
      name: 'ETH-USDC',
      address: zeroAddress,
      imageUrl: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880g',
    },
    {
      id : 2,
      name: 'WBTC-USDC',
      address: zeroAddress,
      imageUrl: 'https://assets.coingecko.com/coins/images/26115/thumb/btcb.png?1655921693',
    }
  ];