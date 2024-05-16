import { PublicKey, Keypair } from '@solana/web3.js';
import { pkg } from '../utils.js';

const secretKey = (
  await import('../wallet.json', {
    assert: { type: 'json' }
  })
).default;

export const payer = Keypair.fromSecretKey(new Uint8Array(secretKey));

const MINT_ADDRESS_58 = pkg.env.MINT_ACCOUNT_ADDRESS;
// For simplicity, the mint authority is the payer.
const MINT_AUTHORITY_58 = payer.publicKey.toBase58();
const TOKEN_ACCOUNT_58 = pkg.env.TOKEN_ACCOUNT_ADDRESS;

export const mintAddress = new PublicKey(MINT_ADDRESS_58 || '1'.repeat(32));
export const mintAuthority = new PublicKey(MINT_AUTHORITY_58);
export const tokenAccount = new PublicKey(TOKEN_ACCOUNT_58 || '1'.repeat(32));
