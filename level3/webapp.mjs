import * as backend from '/build/index.main.mjs';

let stdlib = null;
let suStr = null;
let iBalance = null;
let deployerAcc = null;
let userAcc = null;
let deployerCtc = null;
let userCtc = null;
let raffleToken = null;

const writeLog = async (role, msg) => {
  let el = document.getElementById(`${role}-log`);
  el.append(`${el.value ? '\n' : ''}${msg}`);
  el.scrollTop = el.scrollHeight;
};

const disableBtns = () => {
  const btns = document.querySelectorAll('button.dar').forEach((el) => {
    el.classList.remove('btn-success');
    el.classList.add('btn-secondary');
    el.disabled = true;
  });
};

const enableBtn = (id) => {
  disableBtns();
  const btn = document.getElementById(id);
  btn.classList.remove('btn-secondary');
  btn.classList.add('btn-success');
  btn.removeAttribute('disabled');
};

const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const showBalance = async (role, acc) => {
  let balance = toSU(await stdlib.balanceOf(acc));
  document.getElementById(`${role}-balance`).value = balance;
};


// Listener for selecting a devnet
document.getElementById('devnets').addEventListener('change', (event) => {
  reachsdk.unsafeAllowMultipleStdlibs();
  stdlib = reachsdk.loadStdlib(document.getElementById('devnets').value);
  stdlib.setProviderByName('LocalHost');
  suStr = stdlib.standardUnit;
  iBalance = toAU(10);

  (async () => {
    deployerAcc = await stdlib.newTestAccount(iBalance);
    raffleToken = await stdlib.launchToken(deployerAcc, "Bonny", "NFT", "NFT", { supply: 1})
    console.log(`NFT minted successfully: ${JSON.stringify(raffleToken)}`)

    await showBalance('deployer', deployerAcc);
    userAcc = await stdlib.newTestAccount(iBalance);
    // userAcc.tokenAccept(raffleToken.id)
    await showBalance('user', userAcc);
  })();

  document.getElementById('deployer-balance').value = '';
  document.getElementById('deployer-log').innerHTML = '';
  document.getElementById('deployer-contract-info').value = '';

  document.getElementById('user-balance').value = '';
  document.getElementById('user-log').innerHTML = '';

  document.querySelectorAll('input.unit').forEach((el) => { el.value = suStr; });
  enableBtn('deploy-btn');
});

const Shared = {
    getNum: (numTickets) => {
      const num = (Math.floor(Math.random() * numTickets) + 1)
      return num;
    },
    seeOutcome: (num) => {
      console.log(`The outcome is: ${OUTCOME[num]}`)
    }
  }
  const nftParams = {
    nftId: stdlib.bigNumberToNumber(raffleToken.id),
    numTicket: 10,
  }
// Listener for clicking deploy btn
document.getElementById('deploy-btn').addEventListener('click', (event) => {
  (async () => {
    
    const deployerInteract = {
        ...stdlib.hasRandom,
        ...Shared,
        ...hasConsoleLogger,
        startRaffle: () => {
            console.log(`The raffle information is being sent to the contract`);
            return nftParams;
          },
      
      ready: async () => {
        document.getElementById('deployer-contract-info').value = JSON.stringify(await deployerCtc.getInfo());
        enableBtn('attach-btn');
      },
    //   log: async (...args) => {
    //     console.log(...args)
       
    //   },
      seeHash: (digest) => {
        console.log(`The winning number HASH is: ${digest}`)
      },
      informLackOfWinner: () => {
        console.log("No one won")
      },
      displayWinner: (addr) => {
        console.log(`This address won the raffle > ${addr}`)
      }

    };

    deployerCtc = deployerAcc.contract(backend);
    console.log(deployerCtc)
    await backend.Deployer(deployerCtc, deployerInteract);
    await showBalance('deployer', deployerAcc);
  })();
});

// Listener for clicking attach/optin btn
document.getElementById('attach-btn').addEventListener('click', (event) => {
  (async () => {
    const info = JSON.parse(document.getElementById('deployer-contract-info').value);
    deployerCtc = deployerAcc.contract(backend, info);
    const res = await deployerCtc.a.Attacher.optIn()
    if (res) {
        writeLog('user', `Successful optin`)
    } else {
        writeLog('user', `There was an error`)
    }
    
    // await writeLog('user', message[1])
    // await writeLog('user', `Count: ${count[1]}`)

   
  })();
});

// Listener for clicking getNum raffle btn
document.getElementById('getNum-btn').addEventListener('click', (event) => {
    (async () => {
      const info = JSON.parse(document.getElementById('deployer-contract-info').value);
      deployerCtc = deployerAcc.contract(backend, info);
    const draw = Math.round(Math.random() * fmt(nftParams.numTicket));

      const raffleNum = await deployerCtc.a.Attacher.getNum(draw)
    //   const count = await deployerCtc.views.vCount();
    //   const message = await deployerCtc.views.vMsg();
      
    //   await writeLog('user', message[1])
      await writeLog('user', `Your Raffle number is: ${raffleNum}`)
  
     
    })();
  });

// Listener for getTicketsA
document.getElementById('getTicketsA-btn').addEventListener('click', (event) => {
    (async () => {
      const info = JSON.parse(document.getElementById('deployer-contract-info').value);
      deployerCtc = deployerAcc.contract(backend, info);
      const numAvail = await deployerCtc.a.Attacher.getTicketsA()
    //   const count = await deployerCtc.views.vCount();
    //   const message = await deployerCtc.views.vMsg();
      
    //   await writeLog('user', message[1])
      await writeLog('user', `Count: ${numAvail}`)
  
     
    })();
  });


// Listener for seeOutcome
document.getElementById('seeOutcome-btn').addEventListener('click', (event) => {
    (async () => {
    const OUTCOME = ["You won", "You lost"]

      const info = JSON.parse(document.getElementById('deployer-contract-info').value);
      deployerCtc = deployerAcc.contract(backend, info);
      const outcome = await deployerCtc.a.Attacher.seeOutcome()
    //   const count = await deployerCtc.views.vCount();
    //   const message = await deployerCtc.views.vMsg();
      
    //   await writeLog('user', message[1])
      await writeLog('user', `Count: ${OUTCOME[outcome]}`)
  
     
    })();
  });
