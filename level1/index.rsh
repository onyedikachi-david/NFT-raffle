'reach 0.1';
const amt = 1
// The NFT Raffle Tip Board

const Shared = {
  getNum: Fun([UInt], UInt),
  seeOutcome: Fun([UInt], Null),
}

export const main = Reach.App(() => {
  const D = Participant('Deployer', {
    ...hasRandom,
    ...Shared,
    startRaffle: Fun([], Object({
      nftId: Token,
      numTicket: UInt,
    })),
    seeHash: Fun([Digest], Null),
    // winningNum: UInt,
    // numOfTickets: UInt,
    // token: Token,
    // Specify Alice's interact interface here
  });
  const A = Participant('Attacher', {
    // Specify Bob's interact interface here
    ...Shared,
    showNum: Fun([UInt], Null),
    seeWinner: Fun([UInt], Null)
  });
  init();
  // The first one to publish deploys the contract
  D.only(() => {
    const {nftId, numTicket} = declassify(interact.startRaffle());
    const _winningNum = interact.getNum(numTicket);
    const [_commitA, _saltA] = makeCommitment(interact, _winningNum);
    const commitA = declassify(_commitA);
  })
  D.publish(nftId, numTicket, commitA);
  D.interact.seeHash(commitA)
  commit();
  D.pay([[amt, nftId]])
  commit()

  unknowable(A, D(_winningNum, _saltA))
  // The second one to publish always attaches
  
  A.only(() => {
    const myNum = declassify(interact.getNum(numTicket))
    interact.showNum(myNum)
  })
  A.publish(myNum);
  commit();

  D.only(() => {
    const saltA = declassify(_saltA);
    const winningNum = declassify(_winningNum)
  })
  D.publish(saltA, winningNum)
  checkCommitment(commitA, saltA, winningNum)

  A.interact.seeWinner(winningNum)
  // write your program here#

  const outcome = (myNum == winningNum ? 1 : 0)
  transfer(amt, nftId).to(outcome == 0 ? D : A)
  each([D, A], () => {
    interact.seeOutcome(outcome)
  })
  commit()
  exit();
});
