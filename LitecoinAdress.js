
var bitcoin = require('bitcoinjs-lib')


function rng() {
    return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
}

//------test litecoin adress------------
 var testnet = bitcoin.networks.testnet
 var keyPair = bitcoin.ECPair.makeRandom({
     network: testnet,
     rng: rng
 })
 var wif = keyPair.toWIF()
 var address = keyPair.getAddress()

 console.log("litecoin address :" + address)
 console.log("litecoin wif :" + wif + " \n")

 //---------create with coinkey---

 var CoinKey = require('coinkey') //1.0.0


 var ck = new CoinKey.createRandom()

 console.log("Private Key (Wallet Import Format): " + ck.privateWif)
 console.log("Private Key (Hex): " + ck.privateKey.toString('hex'))
 console.log("Address: " + ck.publicAddress + "\n")

 //---coninkey genera todo random + wif+ adress
 //---bitcoinjs only generate wif+adress