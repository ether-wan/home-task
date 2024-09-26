import { zeroAddress } from "viem";
import icon1 from "../assets/icons/icon-1.png"
import { StaticImageData } from "next/image";


interface Pair {
  id: number;
  name: string;
  address: string;
  icon: StaticImageData | string;
}

export const mockPairs : Array<Pair> = [
    {
      id: 1,
      name: 'ETH-USDC',
      address: zeroAddress,
      icon: icon1,
    },
    {
      id : 2,
      name: 'BTC-USDC',
      address: zeroAddress,
      icon: 'https://assets.coingecko.com/coins/images/26115/thumb/btcb.png?1655921693',
    }
  ];