export const WALLET_CONNECTOR = 'web3connector';
export const LS_THEME = 'theme';
export const DEFAULT_APP_PATH = '/';
export const THEME_SUPPORTED = ['light', 'dark']
export const SELECTED_NETWORK_LOCAL_STORAGE_KEY = 'selected_network'

export const ARBITRUM_NETWORK = 42161
export const LOCAL_NETWORK = 31337
export const BSC_NETWORK = 56
export const BSC_TESTNET_NETWORK = 97
export const BASE_NETWORK = 8453
export const OPBNB_NETWORK = 204

export const CHAINS = {
  [ARBITRUM_NETWORK]: 'Arbitrum',
  [BASE_NETWORK]: 'Base',
  [BSC_NETWORK]: 'BNB Chain',
  [OPBNB_NETWORK]: 'opBNB',
}

export const RPC_URLS: { [chainId: number]: string } = {
  [ARBITRUM_NETWORK]: 'https://arb1.arbitrum.io/rpc',
  [BSC_NETWORK]: 'https://bsc-dataseed.binance.org/',
  [OPBNB_NETWORK]: 'https://opbnb-mainnet-rpc.bnbchain.org',
  [BSC_TESTNET_NETWORK]: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  [LOCAL_NETWORK]: 'http://localhost:8545/',
}

export const NETWORK_SUPPORTED: { [chainId: number]: any } = {
  [ARBITRUM_NETWORK]: {
    chainId: ARBITRUM_NETWORK,
    name: 'Arbitrum',
    fullname: 'Arbitrum',
    key: 'arbitrum',
    logo: '42161.svg',
    explorer: "https://arbiscan.io/",
    nativeTokenSymbol: 'ETH',
    metadata: {
      chainId: "0x" + ARBITRUM_NETWORK.toString(16),
      chainName: "Arbitrum",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: 'https://arb1.arbitrum.io/rpc',
      blockExplorerUrls: ["https://arbiscan.io/"],
    },
  },
  // [BASE_NETWORK]: {
  //   chainId: BASE_NETWORK,
  //   name: 'Base',
  //   fullname: 'Base',
  //   key: 'base',
  //   logo: '8453.png',
  //   explorer: "https://basescan.org",
  //   nativeTokenSymbol: 'ETH',
  //   metadata: {
  //     chainId: "0x" + BASE_NETWORK.toString(16),
  //     chainName: "Base",
  //     nativeCurrency: {
  //       name: "ETH",
  //       symbol: "ETH",
  //       decimals: 18,
  //     },
  //     rpcUrls: 'https://mainnet.base.org',
  //     blockExplorerUrls: ["https://basescan.org"],
  //   },
  // },
  [BSC_NETWORK]: {
    chainId: BSC_NETWORK,
    name: 'BSC',
    fullname: 'BNB Smart Chain',
    key: 'bnb',
    alias: 'bsc',
    logo: '56.svg',
    explorer: "https://bscscan.com",
    nativeTokenSymbol: 'ETH',
    metadata: {
      chainId: "0x" + BSC_NETWORK.toString(16),
      chainName: "BNB Smart Chain",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: 'https://bsc-dataseed3.binance.org',
      blockExplorerUrls: ["https://bscscan.com"],
    },
  },
  [OPBNB_NETWORK]: {
    chainId: OPBNB_NETWORK,
    name: 'opBNB',
    fullname: 'opBNB Mainnet',
    key: 'opbnb',
    logo: '204.png',
    explorer: "https://opbnb.bscscan.com",
    nativeTokenSymbol: 'BNB',
    metadata: {
      chainId: "0x" + OPBNB_NETWORK.toString(16),
      chainName: "opBNB Mainnet",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: 'https://opbnb-mainnet-rpc.bnbchain.org',
      blockExplorerUrls: ["https://opbnb.bscscan.com"],
    },
  }
}

export const CHAIN_IDS = [ARBITRUM_NETWORK, BSC_NETWORK, OPBNB_NETWORK]
export const DEFAULT_CHAIN = CHAIN_IDS[0]
