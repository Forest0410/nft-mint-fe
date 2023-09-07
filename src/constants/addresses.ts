import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    TRIM_ADDRESS: "0x0d68ce8c0bac047c3c6e418b197c213a6b0b0323",
    MIM_ADDRESS: "0x130966628846bfd36ff31a822705796e8cb8c18d",
    PRESALE_ADDRESS: "0xEA0aC6bFdE47A83976257206632c19FE28226Aa6",
    NFT_ADDRESS: "0x62ff511f226F3BeB13e59d9606531C59B45c8a91",
};

const AVAX_TESTNET = {
    TRIM_ADDRESS: "0x9310Ab15b7C4959e1cedEe1142b2eFF1b767500e",
    MIM_ADDRESS: "0x125f2b48Db450De962de6EFe9f75DAF1D4281159",
    PRESALE_ADDRESS: "0x62ff511f226F3BeB13e59d9606531C59B45c8a91",
    NFT_ADDRESS: "0x62ff511f226F3BeB13e59d9606531C59B45c8a91",
};

const KOVAN_TESTNET = {
    TRIM_ADDRESS: "0x9310Ab15b7C4959e1cedEe1142b2eFF1b767500e",
    MIM_ADDRESS: "0x125f2b48Db450De962de6EFe9f75DAF1D4281159",
    PRESALE_ADDRESS: "0x62ff511f226F3BeB13e59d9606531C59B45c8a91",
    NFT_ADDRESS: "0x17B32806E6ea49898eD8343ddA2e5893Ec1e7057",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;
    if (networkID === Networks.FUJI) return AVAX_TESTNET;
    if (networkID === Networks.KOVAN) return KOVAN_TESTNET;

    throw Error("Network don't support");
};
