var Web3 = require('web3');
var provider = 'http://127.0.0.1:7545';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
var address  = '0x4666d1533071fA663E49A52CfcACd7246c8d413D';
var abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "deployed",
      "outputs": [
        {
          "internalType": "address",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "details",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfsDest",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "tradable",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "openSource",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "cost",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fundRaised",
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
          "internalType": "string",
          "name": "ipfsDest",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "tradable",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "cost",
          "type": "uint256"
        }
      ],
      "name": "addDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bool",
          "name": "openSource",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "ipfsDest",
          "type": "string"
        }
      ],
      "name": "changeOpenSource",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bool",
          "name": "tradable",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "ipfsDest",
          "type": "string"
        }
      ],
      "name": "changeTradable",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfsDest",
          "type": "string"
        },
        {
          "internalType": "address payable",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "trade",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfsDest",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "cost",
          "type": "uint256"
        }
      ],
      "name": "changeCost",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfsDest",
          "type": "string"
        }
      ],
      "name": "crowdFunding",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
];

const contract = new web3.eth.Contract(abi, address);

module.exports = contract;