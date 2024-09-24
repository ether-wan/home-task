import { MarketSelector } from '@/components/market-selector';
import { Navbar } from '@/components/navbar';
import { PortfolioStats } from '@/components/portfolio-stats';
import { TradingSelector } from '@/components/trading-selector';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title className=''>Opyn Markets</title>
        <meta
          content="Meow"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3 '>
        <Navbar />
        <div className="grid grid-cols-12 gap-4 mt-5 md:h-14 h-36">
          <div className="md:col-span-2 col-span-12">
            <MarketSelector />
          </div>

          <div className="md:col-span-3 col-span-12">
            <TradingSelector />
          </div>

          <div className="md:col-span-1 hidden md:block">
          </div>

          <div className="md:col-span-6 col-span-12">
            <PortfolioStats />
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-[auto] gap-4 mt-5">
          <div className="md:col-span-8 col-span-12 grid gap-4">

            <div className="bg-[#27292B] h-20 rounded-md">

            </div>

            <div className="bg-[#27292B] h-80 rounded-md">

            </div>

            <div className="bg-[#27292B] h-40 rounded-md">

            </div>

          </div>
          <div className="col-span-4 bg-[#27292B] rounded-md">
          </div>
        </div>

      </main>
    </>
  );
};

export default Home;
