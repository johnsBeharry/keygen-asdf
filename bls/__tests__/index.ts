import bls, { initBLS } from "@chainsafe/bls";
import { ethers } from "ethers";

test("generate random bls keypairs", async () => {
	await initBLS();
	const key1 = bls.generateKeyPair();
	const key2 = bls.generateKeyPair();
	const key3 = bls.generateKeyPair();
	console.log("publicKey", key3.publicKey);
	console.log("privateKey", key3.privateKey);
});

test("generate deterministic bls keypairs", async () => {
	// 1. random function -> 32 random bytes to use as entropy
	let entropy = ethers.utils.randomBytes(32);
	// 2. use entropy to get mnemonic
	let mnemonic = ethers.utils.HDNode.entropyToMnemonic(entropy);
	// get entrophy from mnemonic
	let derivedEntropy = ethers.utils.HDNode.mnemonicToEntropy(mnemonic);
	console.log("derivedEntropy", derivedEntropy);
	await initBLS();
	const key1 = bls.generateKeyPair();
	console.log("publicKey", key1.publicKey);
	console.log("privateKey", key1.privateKey);
});

test("sign messages", async () => {
});

test("aggregate public keys?", async () => {
});

