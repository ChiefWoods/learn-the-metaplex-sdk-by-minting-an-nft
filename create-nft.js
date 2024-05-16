import { Connection } from "@solana/web3.js";
import { Metaplex, keypairIdentity, toMetaplexFile } from "@metaplex-foundation/js";
import { WALLET_KEYPAIR, localStorage } from "./utils.js";
import { readFile } from "fs/promises";

const connection = new Connection('http://127.0.0.1:8899');
const metaplex = Metaplex.make(connection).use(keypairIdentity(WALLET_KEYPAIR)).use(localStorage({ baseUrl: 'http://127.0.0.1:3001/' }));
const imageBuffer = await readFile('assets/pic.png');
const file = toMetaplexFile(imageBuffer, 'pic.png');
const image = await metaplex.storage().upload(file);
const { uri } = await metaplex.nfts().uploadMetadata({ name: 'any string', description: 'any string', image });
const createResponse = await metaplex.nfts().create({ name: "any string", uri, sellerFeeBasisPoints: 100, maxSupply: 1 });
console.log(createResponse);