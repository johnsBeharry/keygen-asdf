import * as bls from "@chainsafe/bls";
//const bls = require("@chainsafe/bls");

bls.initBLS();

const key1 = bls.generateKeyPair();
const key2 = bls.generateKeyPair();
const key3 = bls.generateKeyPair();

export {
	key1,
	key2,
	key3,
}