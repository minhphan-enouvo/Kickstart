const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "juice bicycle seek common shield hello below angry source share exact mobile",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/7b2522686f0148a1b3019dae1ef150c5"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log(interface);
  console.log("Contract deployed to", result.options.address);
};
deploy();
