import { ethers } from "ethers";

const RPC_URL = "https://nodes.pancakeswap.com"; // update new RPC for GooseBumps

const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(RPC_URL, 56);

export default simpleRpcProvider;
