/** @format */

import { FaEthereum, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import { SiBuymeacoffee } from 'react-icons/si';

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
            href='https://www.linkedin.com/in/ayaaneth'>
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

      <section className='my-20 text-center w-3/5'>
        <h2 className='text-2xl font-bold'>Images</h2>
        <div className='mt-4 flex flex-wrap justify-center items-center gap-4'>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/1.png'>
            <Image
              src='/images/1.png'
              alt='Cat404 Image 1'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/2.png'>
            <Image
              src='/images/2.png'
              alt='Cat404 Image 2'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/3.png'>
            <Image
              src='/images/3.png'
              alt='Cat404 Image 3'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/4.png'>
            <Image
              src='/images/4.png'
              alt='Cat404 Image 4'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/5.png'>
            <Image
              src='/images/5.png'
              alt='Cat404 Image 5'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/6.png'>
            <Image
              src='/images/6.png'
              alt='Cat404 Image 6'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/7.png'>
            <Image
              src='/images/7.png'
              alt='Cat404 Image 7'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/8.png'>
            <Image
              src='/images/8.png'
              alt='Cat404 Image 8'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/9.png'>
            <Image
              src='/images/9.png'
              alt='Cat404 Image 9'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/10.png'>
            <Image
              src='/images/10.png'
              alt='Cat404 Image 10'
              width={150}
              height={150}
            />
          </Link>
          <Link
            target='_blank'
            href='https://ipfs.io/ipfs/bafybeifkunl5oebcfnnhqwddlsycrosacasknhr252yqrnk7c4rnsy7vnq/11.png'>
            <Image
              src='/images/11.png'
              alt='Cat404 Image 11'
              width={150}
              height={150}
            />
          </Link>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center gap-6 text-2xl'>
        <h2 className='text-2xl font-bold'>Deployed Links 🚀</h2>
        <ul className='text-lg'>
          <li className='flex justify-center'>
            <span
              role='Image'
              aria-label='cat'>
              🐱
            </span>{' '}
            <Link
              target='_blank'
              href='https://sepolia.etherscan.io/address/0x5c124fe22e67Fb0041515211770Bb8D227D4C407'>
              <span className='text-blue-500 underline'>
                Cat404 deployed link
              </span>
            </Link>
          </li>
          <li>
            <span
              role='Image'
              aria-label='money'>
              💵
            </span>{' '}
            <Link
              target='_blank'
              href='https://sepolia.etherscan.io/address/0xE3706626BD9FABC7c6015aD91Aa0717A371a2A5f'>
              <span className='text-blue-500 underline'>
                fake_USDT deployed link
              </span>
            </Link>
          </li>
          <li className='flex items-center justify-center'>
            <span
              role='Image'
              aria-label='uniswap'>
              🦄
            </span>{' '}
            Uniswap Liquidity
          </li>
        </ul>
        {/* <Image
          src={'/download.svg'}
          width={250}
          className='text-center flex justify-center items-center'
          height={200}
          alt='uniswap'
        /> */}
      </section>
    </main>
  );
}
