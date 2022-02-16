require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy robot noise hole inflict kangaroo army gift'; 
let testAccounts = [
"0x2d685d201b4b83fb3ae5c8e13b7964a09a152ee5f9dd03000ea9b362ea3f7ece",
"0x3cca9322c27eeebc353a3c8e6c4fc4a331c5747ad5ccfb25ca6b5b0abbb6ef7b",
"0xa7c9bb8cc1dd0f9412a61c5c3b5767124950c1f06765d18b2cc4c4287b7fae4c",
"0xc216401cd9e0d1361b38a805533815fad819ce771602e6fd89ca965ded03f4cf",
"0x17e4a5fe1f3b02a1bafac14d3ca9148a0c426e13321897cb018090955de2ae81",
"0xca62fbee35b9e2dda6ead6865e77f742fdd5c76da46dae8bec3460c82e56e431",
"0xd1a9c5e56e0316a4660fca39fa45da813015bca19554061b67b8279021204b4e",
"0x7e98db18761bd77bc03c0da69a96be497a77ff9a5f630c21873efe43a06f5201",
"0x7e63a1a79ac634b9168bc4e8c07be3d2ed8573011cef096fb4e7a144d5acb4d5",
"0xdd5224374354f0ca1b926cee13a43647f1a322f69f649eaa5fbd1c99ab5e7490"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

