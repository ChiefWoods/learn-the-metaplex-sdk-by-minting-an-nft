import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import { WALLET_KEYPAIR, localStorage, pkg } from "./utils.js";
import { writeFile } from "fs/promises";

const connection = new Connection('http://127.0.0.1:8899');
const metaplex = Metaplex.make(connection).use(keypairIdentity(WALLET_KEYPAIR)).use(localStorage({ baseUrl: 'http://127.0.0.1:3001/' }));
const mintAddress = new PublicKey(pkg.env.MINT_ACCOUNT_ADDRESS);
const nft = await metaplex.nfts().findByMint({ mintAddress });
console.log(nft);
const imageData = await metaplex.storage().download(nft.json.image);
console.log(imageData);
await writeFile('pic.png', imageData.buffer);