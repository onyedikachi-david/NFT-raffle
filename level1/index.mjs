import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log("Deployer is creating a token")
const raffleToken = await stdlib.launchToken(accAlice, "Bonny", "NFT", "NFT", { supply: 1})
const OUTCOME = ["Your number is not a match", "Your number is a match"]
const nftParams = {
  nftId: raffleToken.id,
  numTicket: 10,
}

accBob.tokenAccept(nftParams.nftId)

const Shared = {
  getNum: (numTickets) => {
    const num = (Math.floor(Math.random() * numTickets) + 1)
    return 5;
  },
  seeOutcome: (num) => {
    console.log(`The outcome is: ${OUTCOME[num]}`)
  }
}
console.log('Starting backends...');
await Promise.all([
  backend.Deployer(ctcAlice, {
    ...stdlib.hasRandom,
    ...Shared,
    startRaffle: () => {
      console.log(`The raffle information is being sent to the contract`);
      return nftParams;
    },
    seeHash: (digest) => {
      console.log(`The winning number HASH is: ${digest}`)
    }
    // implement Alice's interact object here
  }),
  backend.Attacher(ctcBob, {
    ...stdlib.hasRandom,
    ...Shared,
    // implement Bob's interact object here
    showNum: (num) => {
      console.log((`Your Raffle number is: ${num}`))
    },
    seeWinner: (num) => {
      console.log(`The winning number is: ${num}`)
    },
    
  }),
]);

console.log('Goodbye, Alice and Bob!');
