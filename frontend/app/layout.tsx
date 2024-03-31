/** @format */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CAT404 - ERC404 Token Deployment on Uniswap Sepolia Testnet',
  description:
    "Explore CAT404, a unique collection of ERC404 tokens deployed on Uniswap's Sepolia Testnet. Dive into the world of semi-fungible tokens and discover how CAT404 is revolutionizing token interaction and liquidity on decentralized exchanges.",
  keywords: [
    'CAT404',
    'ERC404 tokens',
    'Uniswap deployment',
    'Sepolia testnet',
    'semi-fungible tokens',
    'ERC404 Uniswap',
    'blockchain',
    'DeFi',
    'decentralized finance',
    'crypto tokens',
    'ERC404 liquidity',
    'token interaction',
    'smart contract deployment',
    'ERC404 smart contract',
    'Next.js blockchain project',
    'Uniswap liquidity pool',
    'ERC404 testnet deployment',
    'CAT404 tokenomics',
    'Uniswap exchange',
    'Ethereum testnet',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
