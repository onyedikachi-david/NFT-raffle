"reach 0.1";

const amt = 1;

const [isOutcome, WON, LOST] = makeEnum(2);
const winner = (numDrawn, winningNum) => (numDrawn == winningNum ? 1 : 0);

assert(winner(2, 3) == WON);
assert(winner(3, 3) == LOST);

forall(UInt, (winningNum) =>
  forall(UInt, (userNum) => assert(isOutcome(winner(winningNum, userNum))))
);

const Shared = {
  getNum: Fun([UInt], UInt),
  seeOutcome: Fun([], UInt),
};

export const main = Reach.App(() => {
  const D = Participant("Deployer", {
    // Deployer's interact interface
    ...hasConsoleLogger,
    ...hasRandom,
    ...Shared,
    startRaffle: Fun(
      [],
      Object({
        nftId: Token,
        numTicket: UInt,
      })
    ),
    seeHash: Fun([Digest], Null),
    ready: Fun([], Null),
    informLackOfWinner: Fun([], Null),
    displayWinner: Fun([Address], Null),
  });
  const A = API("Attacher", {
    // ...hasRandom,
    ...Shared,
    optIn: Fun([], Bool),
    getNumberOfTicketsAvailable: Fun([], UInt),
  });
  init();
  D.only(() => {
    const { nftId, numTicket } = declassify(interact.startRaffle());
    const _winningNum = interact.getNum(numTicket);
    const [_commitA, _saltA] = makeCommitment(interact, _winningNum);
    const commitA = declassify(_commitA);
  });
  D.publish(nftId, numTicket, commitA);
  D.interact.seeHash(commitA);
  commit();
  D.pay([[amt, nftId]]);
  D.interact.ready();

  // Use Map.match or array.include to check is number has been choosen

  const usersM = new Map(Address, UInt);

  const [numOfTickets, drawnN] = parallelReduce([numTicket, 0])
    .invariant(balance(nftId) == amt)
    .while(drawnN <= numOfTickets)
    .paySpec([nftId])
    .api(
      A.optIn,
      // Assumes
      () => {},
      // Payments
      () => [0, [0, nftId]],
      // Consensus
      (res) => {
        res(true);
        return [numOfTickets, drawnN];
      }
    )
    .api_(A.getNumberOfTicketsAvailable, () => {
      check(this != D, "Not deployer");

      return [
        (resolve) => {
          resolve(numTicket);

          return [numOfTickets, drawnN];
        },
      ];
    })
    .api_(
      A.getNum,

      (num) => {
        check(this != D);
        check(isNone(usersM[this]), "You've drawn a ticket before.");
        return [
          (ret) => {
            D.interact.log(this, "Raffle ticket number is", num);
            ret(num);
            usersM[this] = num;
            return [numOfTickets, drawnN + 1];
          },
        ];
      }
    );

  // -----------------------------------------------------
  // TODO: [done] put the publishing of deployers winning number stuff here,
  // since it can't be in the same place with api (it seems)
  // -----------------------------------------------------

  // show that the deployer has published and that the hash is
  // make use of interact.log()

  D.only(() => {
    const saltA = declassify(_saltA);
    const winningNum = declassify(_winningNum);
  });
  commit();
  D.publish(saltA, winningNum);
  checkCommitment(commitA, saltA, winningNum);

  // See Outcome then Transfers
  const [CONTINUE, winnerAddr] = parallelReduce([true, D])
    .invariant(balance(nftId) == amt)
    .while(CONTINUE)
    .api_(A.seeOutcome, () => {
      check(this != D);
      check(isSome(usersM[this]));
      const myNum = usersM[this];
      return [
        (ret) => {
          const won = winner(myNum, winningNum);
          assert(won == WON || LOST);
          if (won != 0) {
            ret(won);
            return [false, this];
          } else {
            ret(won);
            return [true, winnerAddr];
          }
          return [CONTINUE, winnerAddr];
        },
      ];
    });
  commit();
  if (winnerAddr == D) {
    D.interact.informLackOfWinner();
  } else {
    D.interact.displayWinner(winnerAddr);
  }

  D.publish();

  transfer(balance(nftId), nftId).to(winnerAddr);

  transfer(balance()).to(D);

  commit();
  exit();
});
