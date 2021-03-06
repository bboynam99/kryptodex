module.exports = {
    contractDExAddrs: [
        {addr: '0xdb212bb6dd0c9cbc9fc0c5ffe88be35b81cbeb92', info: 'TokenGo Contract'},
    ],
    ethTestnet: false,
    port: '9000',
    ethRPC: 'https://mainnet.infura.io/v3/e053e28ef40246c4812261502590ac2d',
    dbPath: 'mongodb://karachaindemo:testdemo123@ds147589.mlab.com:47589/dex-karachain',
    etherscanUrl: 'http://etherscan.io',
    etherscanAPI: 'http://etherscan.io',
    etherscanAPIKey: 'T1GSYD4D3NEAH44VQ34VHNDR9P316J9E7D',
    tokens: [
        {addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18},
        {addr: '0x54477a3abc9355711bce1c7f150e9129090dcdce', name: 'VAIB', decimals: 18},
        {addr: '0xa431133d469a128da33a978afcc4e4b75ccb3bb4', name: 'SPC', decimals: 18}
    ],
    defaultPair: {token: 'VAIB', base: 'ETH'},
    pairs: [
        {token: 'VAIB', base: 'ETH'},
        {token: 'SPC', base: 'ETH'}
    ],
    dExContractABI: [
        {
        "constant": false,
        "inputs": [
            {
                "name": "tokenGet",
                "type": "address"
            },
            {
                "name": "amountGet",
                "type": "uint256"
            },
            {
                "name": "tokenGive",
                "type": "address"
            },
            {
                "name": "amountGive",
                "type": "uint256"
            },
            {
                "name": "expires",
                "type": "uint256"
            },
            {
                "name": "nonce",
                "type": "uint256"
            },
            {
                "name": "user",
                "type": "address"
            },
            {
                "name": "v",
                "type": "uint8"
            },
            {
                "name": "r",
                "type": "bytes32"
            },
            {
                "name": "s",
                "type": "bytes32"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "trade",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                }
            ],
            "name": "order",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "orderFills",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "cancelOrder",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "depositToken",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "amountFilled",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "tokens",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeMake_",
                    "type": "uint256"
                }
            ],
            "name": "changeFeeMake",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeMake",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeRebate_",
                    "type": "uint256"
                }
            ],
            "name": "changeFeeRebate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeAccount",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "testTrade",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeAccount_",
                    "type": "address"
                }
            ],
            "name": "changeFeeAccount",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeRebate",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeTake_",
                    "type": "uint256"
                }
            ],
            "name": "changeFeeTake",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "admin_",
                    "type": "address"
                }
            ],
            "name": "changeAdmin",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawToken",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "orders",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeTake",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "accountLevelsAddr_",
                    "type": "address"
                }
            ],
            "name": "changeAccountLevelsAddr",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "accountLevelsAddr",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "admin",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "availableVolume",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "admin_",
                    "type": "address"
                },
                {
                    "name": "feeAccount_",
                    "type": "address"
                },
                {
                    "name": "accountLevelsAddr_",
                    "type": "address"
                },
                {
                    "name": "feeMake_",
                    "type": "uint256"
                },
                {
                    "name": "feeTake_",
                    "type": "uint256"
                },
                {
                    "name": "feeRebate_",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "Order",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "Cancel",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "get",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "give",
                    "type": "address"
                }
            ],
            "name": "Trade",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "name": "Deposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "name": "Withdraw",
            "type": "event"
        }
    ]
};