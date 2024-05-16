import { Connection } from '@solana/web3.js';
import { mintTo, setAuthority, AuthorityType } from '@solana/spl-token';
import { payer, mintAddress, tokenAccount, mintAuthority } from './utils.js';

const connection = new Connection('http://127.0.0.1:8899');

await mintTo(
  connection,
  payer,
  mintAddress,
  tokenAccount,
  mintAuthority,
  1
);
await setAuthority(connection, payer, mintAddress, mintAuthority, AuthorityType.MintTokens, null);
