/** @format */

import {
  FaBuyNLarge,
  FaCoffee,
  FaEthereum,
  FaGithub,
  FaLinkedin,
  FaStar,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { FaBeerMugEmpty } from 'react-icons/fa6';
import { SiBuymeacoffee } from 'react-icons/si';
const ImageGrid = () => {
  const images = [];

  for (let i = 1; i <= 11; i++) {
    const imageUrl = `https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/${i}.png`;
    images.push(
      <Link
        key={i}
        href={imageUrl}
        target='_blank'
        rel='noopener noreferrer'>
        <img
          src={imageUrl}
          alt={`Cat404 Image ${i}`}
          width='150'
          height='150'
        />
      </Link>
    );
  }

  return <>{images}</>;
};

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-24'>
      <section className='text-center'>
        <h1 className='text-4xl font-bold'>CAT404</h1>
        <p className='mt-2 text-lg'>
          A collection of 10000 ERC404 tokens deployed on the Sepolia testnet.
        </p>
      </section>

      <section className='mt-8 text-center'>
        <p className='text-xl font-bold'>
          Project created by{' '}
          <Link
            target='_blank'
            href='https://linktr.ee/ayaaneth'>
            <span className='underline animate-pulse italic font-bold text-blue-500 text-5xl flex items-center justify-center'>
              <FaEthereum />
              moayaan.eth <FaEthereum />
            </span>
          </Link>
        </p>
        <div className='flex justify-center space-x-4 mt-4'>
          <Link
            target='_blank'
            href='https://www.linkedin.com/in/ayaan.eth'>
            <FaLinkedin className='text-blue-700 h-12 w-12' />
          </Link>
          <Link
            target='_blank'
            href='https://github.com/moayaan1911'>
            <FaGithub className='text-black h-12 w-12' />
          </Link>
          <Link
            target='_blank'
            href='https://www.buymeacoffee.com/moayaan.eth'>
            <SiBuymeacoffee className='text-yellow-600 h-12 w-12' />
          </Link>
        </div>
        <div className='text-center mt-4'>
          <Link
            target='_blank'
            className='bg-green-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
            href='https://laborx.com/gigs/full-stack-web3-app-developer-building-decentralized-solutions-for-you-37807'>
            HIRE ME for your freelance project
          </Link>
        </div>
      </section>

      <section className='mt-20 text-center text-2xl'>
        <p className=''>Github Link 🌟 Please leave a star if you like it!</p>
        <Link
          target='_blank'
          href='https://github.com/moayaan1911/erc404-uniswap'
          className='text-lg'>
          <span className='text-blue-500 underline'>ERC404-Uniswap Repo</span>
        </Link>
      </section>

      <section className='my-20 text-center w-1/2'>
        <h2 className='text-2xl font-bold'>Images</h2>
        <div className='mt-4 flex flex-wrap justify-center items-center'>
          <ImageGrid />
        </div>
      </section>

      <section className='flex flex-col items-center justify-center gap-6 text-2xl'>
        <h2 className='text-2xl font-bold'>Deployed Links 🚀</h2>
        <ul className='text-lg'>
          <li className='flex justify-center'>
            <span
              role='img'
              aria-label='cat'>
              🐱
            </span>{' '}
            <Link
              target='_blank'
              href='https://sepolia.etherscan.io/address/CAT404_DEPLOYED_ADDRESS'>
              <span className='text-blue-500 underline'>
                Cat404 deployed link
              </span>
            </Link>
          </li>
          <li>
            <span
              role='img'
              aria-label='money'>
              💵
            </span>{' '}
            <Link
              target='_blank'
              href='https://sepolia.etherscan.io/address/FAKE_USDT_DEPLOYED_ADDRESS'>
              <span className='text-blue-500 underline'>
                fake_USDT deployed link
              </span>
            </Link>
          </li>
          <li className='flex items-center justify-center'>
            <span
              role='img'
              aria-label='uniswap'>
              🦄
            </span>{' '}
            Uniswap Liquidity
          </li>
        </ul>
        <Image
          src={'/download.svg'}
          width={200}
          className='text-center flex justify-center items-center'
          height={200}
          alt='uniswap'
        />
      </section>
    </main>
  );
}
