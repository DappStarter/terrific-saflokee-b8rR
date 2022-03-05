require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind history grid gloom suspect slender'; 
let testAccounts = [
"0x93499dc199ca9b2cebd89a219fa8f0f395d67008178ec7337e09ceabbd920b13",
"0xe72c1d02ee324a033a3ad8f64d32a2b14d8352bf5f89568e7d9b0ec3e5879b39",
"0x003197e54b572d0078d9412f1af2fbba5e6c9c466f5e7320bdb87fbf6df84cd7",
"0x383485b2e495e1f2e957d6b3991c6f06165e2539ca4ae594c00605e6cfb800d1",
"0x330618d5462dc72d4eb980c95f9bb78856c5a346149bafe154ca762ae519fb45",
"0xa5d6661c37b224b3e8b5b526090dd67d103b50e57874c8e3aed0e0653660883c",
"0xf1161af90059c08a11fdf7e10551088927a73ae6719fdba914c5464cbace5a0e",
"0xd7731a5624806963f5c214a7139204cdc42655dba5cac7882bae50d97e5c38b2",
"0x38aad14dd90337650aecc10fed0c3ec704a366094d54fa317b5ff2dbea670024",
"0x780b94654a624948f4dd435eb092557015f964e949774512b1f4b0b90c724120"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

