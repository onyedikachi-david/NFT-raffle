// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      3: [ctc0, ctc1, ctc3, ctc6, ctc2],
      5: [ctc0, ctc1, ctc0, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc0, ctc6, ctc2],
      8: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc2, ctc6, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function _Attacher_getNum8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attacher_getNum8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attacher_getNum8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Attacher_getNum0_76: ctc9,
    Attacher_getTicketsA0_76: ctc10,
    Attacher_optIn0_76: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v702, v703, v704, v705, v729, v730, v737, v738] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc8, ctc1]);
  const v762 = ctc.selfAddress();
  const v764 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:95:13:application call to [unknown function] (defined at: ./index.rsh:95:13:function exp)', 'at ./index.rsh:65:48:application call to "runAttacher_getNum0_76" (defined at: ./index.rsh:92:10:function exp)', 'at ./index.rsh:65:48:application call to [unknown function] (defined at: ./index.rsh:65:48:function exp)'],
    msg: 'in',
    who: 'Attacher_getNum'
    });
  const v767 = stdlib.addressEq(v762, v702);
  const v768 = v767 ? false : true;
  stdlib.assert(v768, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:13:application call to [unknown function] (defined at: ./index.rsh:95:13:function exp)', 'at ./index.rsh:65:48:application call to "runAttacher_getNum0_76" (defined at: ./index.rsh:92:10:function exp)', 'at ./index.rsh:65:48:application call to [unknown function] (defined at: ./index.rsh:65:48:function exp)'],
    msg: null,
    who: 'Attacher_getNum'
    });
  const v770 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v762), null);
  let v771;
  switch (v770[0]) {
    case 'None': {
      const v772 = v770[1];
      v771 = true;
      
      break;
      }
    case 'Some': {
      const v773 = v770[1];
      v771 = false;
      
      break;
      }
    }
  stdlib.assert(v771, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:97:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:13:application call to [unknown function] (defined at: ./index.rsh:95:13:function exp)', 'at ./index.rsh:65:48:application call to "runAttacher_getNum0_76" (defined at: ./index.rsh:92:10:function exp)', 'at ./index.rsh:65:48:application call to [unknown function] (defined at: ./index.rsh:65:48:function exp)'],
    msg: 'You\'ve drawn a ticket before.',
    who: 'Attacher_getNum'
    });
  const v780 = ['Attacher_getNum0_76', v764];
  
  const txn1 = await (ctc.sendrecv({
    args: [v702, v703, v704, v705, v729, v730, v737, v738, v780],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:68:14:decimal', stdlib.UInt_max, '0'), v703]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v809], secs: v811, time: v810, didSend: v326, from: v808 } = txn1;
      
      switch (v809[0]) {
        case 'Attacher_getNum0_76': {
          const v812 = v809[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attacher_getNum"
            });
          ;
          ;
          const v837 = v812[stdlib.checkedBigNumberify('./index.rsh:92:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v808), null);
          const v849 = await txn1.getOutput('Attacher_getNum', 'v837', ctc1, v837);
          
          await stdlib.simMapSet(sim_r, 0, v808, v837);
          const v855 = stdlib.add(v729, stdlib.checkedBigNumberify('./index.rsh:103:44:decimal', stdlib.UInt_max, '1'));
          const v1518 = v855;
          const v1519 = v730;
          const v1521 = v737;
          const v1522 = v738;
          const v1523 = stdlib.le(v855, v730);
          if (v1523) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Attacher_getTicketsA0_76': {
          const v875 = v809[1];
          
          break;
          }
        case 'Attacher_optIn0_76': {
          const v938 = v809[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v809], secs: v811, time: v810, didSend: v326, from: v808 } = txn1;
  switch (v809[0]) {
    case 'Attacher_getNum0_76': {
      const v812 = v809[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v837 = v812[stdlib.checkedBigNumberify('./index.rsh:92:10:spread', stdlib.UInt_max, '0')];
      const v838 = stdlib.addressEq(v808, v702);
      const v839 = v838 ? false : true;
      stdlib.assert(v839, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:17:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
        msg: null,
        who: 'Attacher_getNum'
        });
      const v841 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v808), null);
      let v842;
      switch (v841[0]) {
        case 'None': {
          const v843 = v841[1];
          v842 = true;
          
          break;
          }
        case 'Some': {
          const v844 = v841[1];
          v842 = false;
          
          break;
          }
        }
      stdlib.assert(v842, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:97:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:17:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
        msg: 'You\'ve drawn a ticket before.',
        who: 'Attacher_getNum'
        });
      const v849 = await txn1.getOutput('Attacher_getNum', 'v837', ctc1, v837);
      if (v326) {
        stdlib.protect(ctc0, await interact.out(v812, v849), {
          at: './index.rsh:93:7:application',
          fs: ['at ./index.rsh:93:7:application call to [unknown function] (defined at: ./index.rsh:93:7:function exp)', 'at ./index.rsh:101:16:application call to "ret" (defined at: ./index.rsh:99:17:function exp)', 'at ./index.rsh:99:17:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
          msg: 'out',
          who: 'Attacher_getNum'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v808, v837);
      const v855 = stdlib.add(v729, stdlib.checkedBigNumberify('./index.rsh:103:44:decimal', stdlib.UInt_max, '1'));
      const v1518 = v855;
      const v1519 = v730;
      const v1521 = v737;
      const v1522 = v738;
      const v1523 = stdlib.le(v855, v730);
      if (v1523) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Attacher_getTicketsA0_76': {
      const v875 = v809[1];
      return;
      break;
      }
    case 'Attacher_optIn0_76': {
      const v938 = v809[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Attacher_getTicketsA8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attacher_getTicketsA8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attacher_getTicketsA8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Attacher_getNum0_76: ctc10,
    Attacher_getTicketsA0_76: ctc9,
    Attacher_optIn0_76: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v702, v703, v704, v705, v729, v730, v737, v738] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc8, ctc1]);
  const v751 = ctc.selfAddress();
  const v753 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)', 'at ./index.rsh:65:48:application call to "runAttacher_getTicketsA0_76" (defined at: ./index.rsh:81:10:function exp)', 'at ./index.rsh:65:48:application call to [unknown function] (defined at: ./index.rsh:65:48:function exp)'],
    msg: 'in',
    who: 'Attacher_getTicketsA'
    });
  const v754 = stdlib.addressEq(v751, v702);
  const v755 = v754 ? false : true;
  stdlib.assert(v755, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)', 'at ./index.rsh:65:48:application call to "runAttacher_getTicketsA0_76" (defined at: ./index.rsh:81:10:function exp)', 'at ./index.rsh:65:48:application call to [unknown function] (defined at: ./index.rsh:65:48:function exp)'],
    msg: 'Not deployer',
    who: 'Attacher_getTicketsA'
    });
  const v760 = ['Attacher_getTicketsA0_76', v753];
  
  const txn1 = await (ctc.sendrecv({
    args: [v702, v703, v704, v705, v729, v730, v737, v738, v760],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:68:14:decimal', stdlib.UInt_max, '0'), v703]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v809], secs: v811, time: v810, didSend: v326, from: v808 } = txn1;
      
      switch (v809[0]) {
        case 'Attacher_getNum0_76': {
          const v812 = v809[1];
          
          break;
          }
        case 'Attacher_getTicketsA0_76': {
          const v875 = v809[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attacher_getTicketsA"
            });
          ;
          ;
          const v924 = await txn1.getOutput('Attacher_getTicketsA', 'v704', ctc1, v704);
          
          const v1682 = v729;
          const v1683 = v730;
          const v1685 = v737;
          const v1686 = v738;
          const v1687 = stdlib.le(v729, v730);
          if (v1687) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Attacher_optIn0_76': {
          const v938 = v809[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v809], secs: v811, time: v810, didSend: v326, from: v808 } = txn1;
  switch (v809[0]) {
    case 'Attacher_getNum0_76': {
      const v812 = v809[1];
      return;
      break;
      }
    case 'Attacher_getTicketsA0_76': {
      const v875 = v809[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v921 = stdlib.addressEq(v808, v702);
      const v922 = v921 ? false : true;
      stdlib.assert(v922, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:82:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:19:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
        msg: 'Not deployer',
        who: 'Attacher_getTicketsA'
        });
      const v924 = await txn1.getOutput('Attacher_getTicketsA', 'v704', ctc1, v704);
      if (v326) {
        stdlib.protect(ctc0, await interact.out(v875, v924), {
          at: './index.rsh:81:11:application',
          fs: ['at ./index.rsh:81:11:application call to [unknown function] (defined at: ./index.rsh:81:11:function exp)', 'at ./index.rsh:86:18:application call to "resolve" (defined at: ./index.rsh:85:19:function exp)', 'at ./index.rsh:85:19:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
          msg: 'out',
          who: 'Attacher_getTicketsA'
          });
        }
      else {
        }
      
      const v1682 = v729;
      const v1683 = v730;
      const v1685 = v737;
      const v1686 = v738;
      const v1687 = stdlib.le(v729, v730);
      if (v1687) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Attacher_optIn0_76': {
      const v938 = v809[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Attacher_optIn8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attacher_optIn8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attacher_optIn8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Attacher_getNum0_76: ctc10,
    Attacher_getTicketsA0_76: ctc9,
    Attacher_optIn0_76: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v702, v703, v704, v705, v729, v730, v737, v738] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc8, ctc1]);
  const v745 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:72:10:application call to [unknown function] (defined at: ./index.rsh:72:10:function exp)', 'at ./index.rsh:65:48:application call to "runAttacher_optIn0_76" (defined at: ./index.rsh:69:9:function exp)', 'at ./index.rsh:65:48:application call to [unknown function] (defined at: ./index.rsh:65:48:function exp)'],
    msg: 'in',
    who: 'Attacher_optIn'
    });
  const v749 = ['Attacher_optIn0_76', v745];
  
  const txn1 = await (ctc.sendrecv({
    args: [v702, v703, v704, v705, v729, v730, v737, v738, v749],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:74:18:decimal', stdlib.UInt_max, '0'), v703]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v809], secs: v811, time: v810, didSend: v326, from: v808 } = txn1;
      
      switch (v809[0]) {
        case 'Attacher_getNum0_76': {
          const v812 = v809[1];
          
          break;
          }
        case 'Attacher_getTicketsA0_76': {
          const v875 = v809[1];
          
          break;
          }
        case 'Attacher_optIn0_76': {
          const v938 = v809[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attacher_optIn"
            });
          ;
          ;
          const v994 = true;
          const v995 = await txn1.getOutput('Attacher_optIn', 'v994', ctc6, v994);
          
          const v1846 = v729;
          const v1847 = v730;
          const v1849 = v737;
          const v1850 = v738;
          const v1851 = stdlib.le(v729, v730);
          if (v1851) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v809], secs: v811, time: v810, didSend: v326, from: v808 } = txn1;
  switch (v809[0]) {
    case 'Attacher_getNum0_76': {
      const v812 = v809[1];
      return;
      break;
      }
    case 'Attacher_getTicketsA0_76': {
      const v875 = v809[1];
      return;
      break;
      }
    case 'Attacher_optIn0_76': {
      const v938 = v809[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v994 = true;
      const v995 = await txn1.getOutput('Attacher_optIn', 'v994', ctc6, v994);
      if (v326) {
        stdlib.protect(ctc0, await interact.out(v938, v995), {
          at: './index.rsh:70:7:application',
          fs: ['at ./index.rsh:70:7:application call to [unknown function] (defined at: ./index.rsh:70:7:function exp)', 'at ./index.rsh:77:12:application call to "res" (defined at: ./index.rsh:76:13:function exp)', 'at ./index.rsh:76:13:application call to [unknown function] (defined at: ./index.rsh:76:13:function exp)'],
          msg: 'out',
          who: 'Attacher_optIn'
          });
        }
      else {
        }
      
      const v1846 = v729;
      const v1847 = v730;
      const v1849 = v737;
      const v1850 = v738;
      const v1851 = stdlib.le(v729, v730);
      if (v1851) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Attacher_seeOutcome7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attacher_seeOutcome7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attacher_seeOutcome7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v702, v703, v1012, v1019, v1020] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc3, ctc7, ctc1]);
  const v1024 = ctc.selfAddress();
  const v1026 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:129:28:application call to [unknown function] (defined at: ./index.rsh:129:28:function exp)', 'at ./index.rsh:129:28:application call to [unknown function] (defined at: ./index.rsh:129:28:function exp)'],
    msg: 'in',
    who: 'Attacher_seeOutcome'
    });
  const v1027 = stdlib.addressEq(v1024, v702);
  const v1028 = v1027 ? false : true;
  stdlib.assert(v1028, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:28:application call to [unknown function] (defined at: ./index.rsh:129:28:function exp)', 'at ./index.rsh:129:28:application call to [unknown function] (defined at: ./index.rsh:129:28:function exp)'],
    msg: null,
    who: 'Attacher_seeOutcome'
    });
  const v1030 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1024), null);
  let v1031;
  switch (v1030[0]) {
    case 'None': {
      const v1032 = v1030[1];
      v1031 = false;
      
      break;
      }
    case 'Some': {
      const v1033 = v1030[1];
      v1031 = true;
      
      break;
      }
    }
  stdlib.assert(v1031, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:28:application call to [unknown function] (defined at: ./index.rsh:129:28:function exp)', 'at ./index.rsh:129:28:application call to [unknown function] (defined at: ./index.rsh:129:28:function exp)'],
    msg: null,
    who: 'Attacher_seeOutcome'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v702, v703, v1012, v1019, v1020, v1026],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:129:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1039], secs: v1041, time: v1040, didSend: v548, from: v1038 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Attacher_seeOutcome"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1038), null);
      const v1052 = stdlib.checkedBigNumberify('./index.rsh:6:72:decimal', stdlib.UInt_max, '0');
      const v1053 = await txn1.getOutput('Attacher_seeOutcome', 'v1052', ctc1, v1052);
      
      const v1888 = v1012;
      const v1890 = v1019;
      const v1891 = v1020;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc3, ctc7, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1039], secs: v1041, time: v1040, didSend: v548, from: v1038 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1043 = stdlib.addressEq(v1038, v702);
  const v1044 = v1043 ? false : true;
  stdlib.assert(v1044, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)'],
    msg: null,
    who: 'Attacher_seeOutcome'
    });
  const v1046 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1038), null);
  let v1047;
  switch (v1046[0]) {
    case 'None': {
      const v1048 = v1046[1];
      v1047 = false;
      
      break;
      }
    case 'Some': {
      const v1049 = v1046[1];
      v1047 = true;
      
      break;
      }
    }
  stdlib.assert(v1047, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)'],
    msg: null,
    who: 'Attacher_seeOutcome'
    });
  const v1052 = stdlib.checkedBigNumberify('./index.rsh:6:72:decimal', stdlib.UInt_max, '0');
  const v1053 = await txn1.getOutput('Attacher_seeOutcome', 'v1052', ctc1, v1052);
  if (v548) {
    stdlib.protect(ctc0, await interact.out(v1039, v1053), {
      at: './index.rsh:129:11:application',
      fs: ['at ./index.rsh:129:11:application call to [unknown function] (defined at: ./index.rsh:129:11:function exp)', 'at ./index.rsh:141:16:application call to "ret" (defined at: ./index.rsh:134:15:function exp)', 'at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)'],
      msg: 'out',
      who: 'Attacher_seeOutcome'
      });
    }
  else {
    }
  
  const v1888 = v1012;
  const v1890 = v1019;
  const v1891 = v1020;
  return;
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    nftId: ctc3,
    numTicket: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Attacher_getNum0_76: ctc7,
    Attacher_getTicketsA0_76: ctc8,
    Attacher_optIn0_76: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v679 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v680 = [v679];
  const v693 = stdlib.protect(ctc4, await interact.startRaffle(), {
    at: './index.rsh:49:65:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'startRaffle',
    who: 'Deployer'
    });
  const v694 = v693.nftId;
  const v695 = v693.numTicket;
  const v698 = stdlib.protect(ctc1, await interact.getNum(v695), {
    at: './index.rsh:50:40:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'getNum',
    who: 'Deployer'
    });
  const v699 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:51:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  const v700 = stdlib.digest(ctc5, [v699, v698]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v694, v695, v700],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v703, v704, v705], secs: v707, time: v706, didSend: v53, from: v702 } = txn1;
      
      const v708 = v680[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0')];
      const v710 = v708[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '1')];
      const v711 = v708[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '2')];
      const v712 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v710, v711];
      const v713 = stdlib.Array_set(v680, stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0'), v712);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v703
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v703, v704, v705], secs: v707, time: v706, didSend: v53, from: v702 } = txn1;
  const v708 = v680[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0')];
  const v710 = v708[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '1')];
  const v711 = v708[stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '2')];
  const v712 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v710, v711];
  const v713 = stdlib.Array_set(v680, stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0'), v712);
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v705), {
    at: './index.rsh:56:21:application',
    fs: ['at ./index.rsh:56:21:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)', 'at ./index.rsh:56:21:application call to "liftedInteract" (defined at: ./index.rsh:56:21:application)'],
    msg: 'seeHash',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v702, v703, v704, v705, v713],
    evt_cnt: 0,
    funcNum: 1,
    lct: v706,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'), v703]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v718, time: v717, didSend: v64, from: v716 } = txn2;
      
      ;
      const v719 = v713[stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '0')];
      const v720 = v719[stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '0')];
      const v721 = stdlib.add(v720, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
      const v724 = v719[stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '1')];
      const v725 = v719[stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '2')];
      const v726 = [v721, v724, v725];
      const v727 = stdlib.Array_set(v713, stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '0'), v726);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v703
        });
      const v729 = stdlib.checkedBigNumberify('./index.rsh:65:61:decimal', stdlib.UInt_max, '0');
      const v730 = v704;
      const v731 = v717;
      const v737 = v727;
      const v738 = stdlib.checkedBigNumberify('./index.rsh:45:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v742 = stdlib.le(v729, v730);
        
        return v742;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc3, ctc1, ctc6, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v718, time: v717, didSend: v64, from: v716 } = txn2;
  ;
  const v719 = v713[stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '0')];
  const v720 = v719[stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '0')];
  const v721 = stdlib.add(v720, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
  const v724 = v719[stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '1')];
  const v725 = v719[stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '2')];
  const v726 = [v721, v724, v725];
  const v727 = stdlib.Array_set(v713, stdlib.checkedBigNumberify('./index.rsh:58:5:dot', stdlib.UInt_max, '0'), v726);
  ;
  const v728 = stdlib.addressEq(v702, v716);
  stdlib.assert(v728, {
    at: './index.rsh:58:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  let v729 = stdlib.checkedBigNumberify('./index.rsh:65:61:decimal', stdlib.UInt_max, '0');
  let v730 = v704;
  let v731 = v717;
  let v737 = v727;
  let v738 = stdlib.checkedBigNumberify('./index.rsh:45:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v742 = stdlib.le(v729, v730);
    
    return v742;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v809], secs: v811, time: v810, didSend: v326, from: v808 } = txn3;
    switch (v809[0]) {
      case 'Attacher_getNum0_76': {
        const v812 = v809[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v837 = v812[stdlib.checkedBigNumberify('./index.rsh:92:10:spread', stdlib.UInt_max, '0')];
        const v838 = stdlib.addressEq(v808, v702);
        const v839 = v838 ? false : true;
        stdlib.assert(v839, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:17:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v841 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v808), null);
        let v842;
        switch (v841[0]) {
          case 'None': {
            const v843 = v841[1];
            v842 = true;
            
            break;
            }
          case 'Some': {
            const v844 = v841[1];
            v842 = false;
            
            break;
            }
          }
        stdlib.assert(v842, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:97:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:17:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
          msg: 'You\'ve drawn a ticket before.',
          who: 'Deployer'
          });
        const v848 = 'Raffle ticket number is';
        stdlib.protect(ctc0, await interact.log(v808, v848, v837), {
          at: './index.rsh:100:27:application',
          fs: ['at ./index.rsh:100:27:application call to [unknown function] (defined at: ./index.rsh:100:27:function exp)', 'at ./index.rsh:100:27:application call to "liftedInteract" (defined at: ./index.rsh:100:27:application)', 'at ./index.rsh:99:17:application call to [unknown function] (defined at: ./index.rsh:99:17:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        await txn3.getOutput('Attacher_getNum', 'v837', ctc1, v837);
        await stdlib.mapSet(map0, v808, v837);
        const v855 = stdlib.add(v729, stdlib.checkedBigNumberify('./index.rsh:103:44:decimal', stdlib.UInt_max, '1'));
        const cv729 = v855;
        const cv730 = v730;
        const cv731 = v810;
        const cv737 = v737;
        const cv738 = v738;
        
        v729 = cv729;
        v730 = cv730;
        v731 = cv731;
        v737 = cv737;
        v738 = cv738;
        
        continue;
        break;
        }
      case 'Attacher_getTicketsA0_76': {
        const v875 = v809[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v921 = stdlib.addressEq(v808, v702);
        const v922 = v921 ? false : true;
        stdlib.assert(v922, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:82:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:19:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
          msg: 'Not deployer',
          who: 'Deployer'
          });
        await txn3.getOutput('Attacher_getTicketsA', 'v704', ctc1, v704);
        const cv729 = v729;
        const cv730 = v730;
        const cv731 = v810;
        const cv737 = v737;
        const cv738 = v738;
        
        v729 = cv729;
        v730 = cv730;
        v731 = cv731;
        v737 = cv737;
        v738 = cv738;
        
        continue;
        break;
        }
      case 'Attacher_optIn0_76': {
        const v938 = v809[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v994 = true;
        await txn3.getOutput('Attacher_optIn', 'v994', ctc10, v994);
        const cv729 = v729;
        const cv730 = v730;
        const cv731 = v810;
        const cv737 = v737;
        const cv738 = v738;
        
        v729 = cv729;
        v730 = cv730;
        v731 = cv731;
        v737 = cv737;
        v738 = cv738;
        
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v702, v703, v705, v737, v738, v699, v698],
    evt_cnt: 2,
    funcNum: 3,
    lct: v731,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:122:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1004, v1005], secs: v1007, time: v1006, didSend: v431, from: v1003 } = txn3;
      
      ;
      const v1011 = true;
      const v1012 = v702;
      const v1013 = v1006;
      const v1019 = v737;
      const v1020 = v738;
      
      if (await (async () => {
        
        return v1011;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1062 = stdlib.addressEq(v1012, v702);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc3, ctc6, ctc13, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1004, v1005], secs: v1007, time: v1006, didSend: v431, from: v1003 } = txn3;
  ;
  const v1008 = stdlib.addressEq(v702, v1003);
  stdlib.assert(v1008, {
    at: './index.rsh:122:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v1009 = stdlib.digest(ctc5, [v1004, v1005]);
  const v1010 = stdlib.digestEq(v705, v1009);
  stdlib.assert(v1010, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:123:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  let v1011 = true;
  let v1012 = v702;
  let v1013 = v1006;
  let v1019 = v737;
  let v1020 = v738;
  
  while (await (async () => {
    
    return v1011;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1039], secs: v1041, time: v1040, didSend: v548, from: v1038 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v1043 = stdlib.addressEq(v1038, v702);
    const v1044 = v1043 ? false : true;
    stdlib.assert(v1044, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)'],
      msg: null,
      who: 'Deployer'
      });
    const v1046 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1038), null);
    let v1047;
    switch (v1046[0]) {
      case 'None': {
        const v1048 = v1046[1];
        v1047 = false;
        
        break;
        }
      case 'Some': {
        const v1049 = v1046[1];
        v1047 = true;
        
        break;
        }
      }
    stdlib.assert(v1047, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)'],
      msg: null,
      who: 'Deployer'
      });
    const v1052 = stdlib.checkedBigNumberify('./index.rsh:6:72:decimal', stdlib.UInt_max, '0');
    await txn4.getOutput('Attacher_seeOutcome', 'v1052', ctc1, v1052);
    const cv1011 = true;
    const cv1012 = v1012;
    const cv1013 = v1040;
    const cv1019 = v1019;
    const cv1020 = v1020;
    
    v1011 = cv1011;
    v1012 = cv1012;
    v1013 = cv1013;
    v1019 = cv1019;
    v1020 = cv1020;
    
    continue;
    
    }
  const v1062 = stdlib.addressEq(v1012, v702);
  if (v1062) {
    stdlib.protect(ctc0, await interact.informLackOfWinner(), {
      at: './index.rsh:150:34:application',
      fs: ['at ./index.rsh:150:34:application call to [unknown function] (defined at: ./index.rsh:150:34:function exp)', 'at ./index.rsh:150:34:application call to "liftedInteract" (defined at: ./index.rsh:150:34:application)'],
      msg: 'informLackOfWinner',
      who: 'Deployer'
      });
    
    }
  else {
    stdlib.protect(ctc0, await interact.displayWinner(v1012), {
      at: './index.rsh:152:29:application',
      fs: ['at ./index.rsh:152:29:application call to [unknown function] (defined at: ./index.rsh:152:29:function exp)', 'at ./index.rsh:152:29:application call to "liftedInteract" (defined at: ./index.rsh:152:29:application)'],
      msg: 'displayWinner',
      who: 'Deployer'
      });
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v702, v703, v1012, v1019, v1020, v1062],
    evt_cnt: 0,
    funcNum: 5,
    lct: v1013,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:155:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v1067, time: v1066, didSend: v617, from: v1065 } = txn4;
      
      ;
      const v1069 = v1019[stdlib.checkedBigNumberify('./index.rsh:157:19:application', stdlib.UInt_max, '0')];
      const v1070 = v1069[stdlib.checkedBigNumberify('./index.rsh:157:19:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v1012,
        tok: v703
        });
      sim_r.txns.push({
        kind: 'from',
        to: v702,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v703
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc3, ctc11, ctc13, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1067, time: v1066, didSend: v617, from: v1065 } = txn4;
  ;
  const v1068 = stdlib.addressEq(v702, v1065);
  stdlib.assert(v1068, {
    at: './index.rsh:155:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v1069 = v1019[stdlib.checkedBigNumberify('./index.rsh:157:19:application', stdlib.UInt_max, '0')];
  const v1070 = v1069[stdlib.checkedBigNumberify('./index.rsh:157:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  };
export async function Attacher_getNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher_getNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher_getNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Attacher_getNum8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Attacher_getTicketsA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher_getTicketsA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher_getTicketsA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Attacher_getTicketsA8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Attacher_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Attacher_optIn8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Attacher_seeOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher_seeOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher_seeOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Attacher_seeOutcome7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Attacher_getNum(uint64)uint64`, `Attacher_getTicketsA()uint64`, `Attacher_optIn()byte`, `Attacher_seeOutcome()uint64`],
    pure: [],
    sigs: [`Attacher_getNum(uint64)uint64`, `Attacher_getTicketsA()uint64`, `Attacher_optIn()byte`, `Attacher_seeOutcome()uint64`]
    },
  appApproval: `BiAQAAEIIAUHBAMCWQmG2+XCCbSxrOIOlKvE+QIooI0GJgMBAAABASI1ADEYQQVPKWRJIls1ASRbNQIxGSMSQQAKMQAoIQqvZkIFHDYaABdJQQBbIjUEIzUGSSELDEAAIkkhDAxAABMhDBJEKTX/gAECNP9QJK9QQgBaIQsSRClCAW5JIQ0MQAAQIQ0SRDYaATX/KDT/UEIAO4HEgf/fAhJEKTX/KjT/UCSvUEIAJjYaAhc1BDYaAzYaARdJIQQMQAIoSYEGDEABpUkhBQxAAR8hBRJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/JVs1/iEOWzX9VzAgNfyBUFs1+4FYWzX6V2ARNfmBcVs1+Ek1BTX3gAR3Yn7vNPdQsDT3IlVJIwxAAF9JIQgMQAAoIQgSRIAJAAAAAAAAA+IBsCo1BzT/NP40/TT8NPs0+jIGNPk0+EIDAEgxADT/E0SACAAAAAAAAALANP0WULA0/RY1BzT/NP40/TT8NPs0+jIGNPk0+EIC0Eg091cBCDX2NPYXNfUxADT/E0QxAIgD+Ek18yJVQAAGIzX0QgAGIjX0QgAANPREgAgAAAAAAAADRTT1FlCwNPUWNQcxACgqNPUWUGY0/zT+NP00/DT7Iwg0+jIGNPk0+EICbUghBTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAEyeiNDDT+ULAxADT/E0QxAIgDd0k1/CJVQAAGIjX9QgAGIzX9QgAANP1EgBAAAAAAAAAEHAAAAAAAAAAAsCSvNQc0/zQDJVsjNANXKCAyBjQDV0gRNAMhCVtCAllIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yVbNf6ABMyZklywNP8xABJEsSKyATQDV0gRVwARIluyEiEGshA0A1coILIUNP6yEbOxIrIBNAMhCVuyCCOyEDT/sgezsSKyASKyEiEGshAyCbIVMgqyFDT+shGzQgJESSMMQADcSSEHDEAAZyEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQVJIls1/iRbNf2ABKSl8Ig0/hZQNP0WULA0/zEAEkQ0A1coIDT+FjT9FlABEkQ0/zQDJVsjNP8yBjQDV0gRNAMhCVtCAWkjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/iEOWzX9V1ARNfyABJqLkXSwNPxXABE1+yM0/ogCJDT/MQASRDT/NP40/TQDVzAgIjT9MgY0+yJbIwgWNPtXCAhQNPtXEAFQIkIAkEghD4gB2SI0ARJENARJIhJMNAISEURJNQVJSSJbNf8kWzX+VxAgNf2ABBYtKDs0/xZQNP4WUDT9ULCBEa9JNfxXABE1+ySvNPtXCAhQNPtXEAFQNfohD4gBhbEisgEishIhBrIQMgqyFDT/shGzMQA0/xZQNP4WUDT9UDT6UChLAVcAYWdIIzUBMgY1AkIA7jX/Nf41/TX8Nfs1+jX5Nfg19zT7NPwOQQAuNPc0+BZQNPkWUDT6UDT7FlA0/BZQNP5QNP8WUChLAVcAeWdIJDUBMgY1AkIApjT3NPgWUDT6UDT+UDT/FlAoSwFXAGFnSCEHNQEyBjUCQgCDNf81/jX9Nfw1+zX6Nfk0+0EAIzT5NPoWUDT8UDT+UDT/FlAoSwFXAGFnSCEFNQEyBjUCQgBNNPw0+RI1+DT5NPoWUDT8UDT+UDT/FlA0+BZRBwhQKEsBVwBiZ0ghBDUBMgY1AkIAHDEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghCq+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBhJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 121,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v703",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v704",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v705",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v703",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v704",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v705",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1004",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1005",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1039",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Attacher_getNum0_76",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attacher_getTicketsA0_76",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attacher_optIn0_76",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v809",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1052",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v704",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v837",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v994",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Attacher_getNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Attacher_getTicketsA",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Attacher_optIn",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Attacher_seeOutcome",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1004",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1005",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1039",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T23",
                    "name": "_Attacher_getNum0_76",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attacher_getTicketsA0_76",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attacher_optIn0_76",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v809",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002a2638038062002a2683398101604081905262000026916200041b565b60008055436003556200003862000247565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560076200021d565b62000115620002ae565b33815260208084018051516001600160a01b03168284015280518201516040808501919091529051810151606080850191909152840151608084015260016000819055439055516200016a91839101620004dd565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c4565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c7565b6020020151828260018110620001e057620001e0620004c7565b602002015280620001f1816200055d565b915050620001a7565b5081818460018110620002115762000211620004c7565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002a962000380565b828054620002ff9062000587565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b60208501519092506001600160a01b0381168114620004a257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b60018110156200055157825180518352858101518684015286015115158683015291840191908301906001016200051f565b50505050505092915050565b60006000198214156200058057634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b61245280620005d46000396000f3fe6080604052600436106100bd5760003560e01c80636da017a011610079578063a5e8513711610056578063a5e8513714610198578063ab53f2c6146101ab578063ad2d91d1146101ce578063ecfe2d2d146101e157005b80636da017a01461015d57806383230757146101705780638e3147691461018557005b80631adce5ac146100c65780631e93b0f1146100d95780632c10a159146100fd5780633bc5b7bf146101105780635fe059fb1461013d57806366f839661461015557005b366100c457005b005b6100c46100d4366004611a7a565b6101e9565b3480156100e557600080fd5b506003545b6040519081526020015b60405180910390f35b6100c461010b366004611aa4565b61020d565b34801561011c57600080fd5b5061013061012b366004611ad5565b61022d565b6040516100f49190611b08565b610145610244565b60405190151581526020016100f4565b6100ea610274565b6100c461016b366004611aa4565b6102a4565b34801561017c57600080fd5b506001546100ea565b6100c4610193366004611aa4565b6102c4565b6100ea6101a6366004611b3f565b6102e4565b3480156101b757600080fd5b506101c061031b565b6040516100f4929190611b84565b6100c46101dc366004611bbe565b6103b8565b6100ea6103d8565b6101f16116ea565b61020961020336849003840184611ca9565b82610407565b5050565b6102156116ea565b61020961022736849003840184611d64565b826108c7565b610235611714565b61023e82610b12565b92915050565b600061024e611737565b602081015151600290526102606116ea565b61026a8282610407565b6040015192915050565b600061027e611737565b602081015151600190526102906116ea565b61029a8282610407565b6020015192915050565b6102ac6116ea565b6102096102be36849003840184611d9c565b82610bd0565b6102cc6116ea565b6102096102de36849003840184611d64565b82610e29565b60006102ee611737565b602081810180515160009052515101518390526103096116ea565b6103138282610407565b519392505050565b60006060600054600280805461033090611df6565b80601f016020809104026020016040519081016040528092919081815260200182805461035c90611df6565b80156103a95780601f1061037e576101008083540402835291602001916103a9565b820191906000526020600020905b81548152906001019060200180831161038c57829003601f168201915b50505050509050915091509091565b6103c06116ea565b6102096103d236849003840184611e2b565b82610fee565b60006103e2611756565b6020810151600090526103f36116ea565b6103fd8282610bd0565b6060015192915050565b61041760086000541460246111e8565b815161043290158061042b57508251600154145b60256111e8565b60008080556002805461044490611df6565b80601f016020809104026020016040519081016040528092919081815260200182805461047090611df6565b80156104bd5780601f10610492576101008083540402835291602001916104bd565b820191906000526020600020905b8154815290600101906020018083116104a057829003601f168201915b50505050508060200190518101906104d59190611f19565b90506104f96040805160608101825260009181018281528152602081019190915290565b7f0cd410bacced72c8a8fe63d26dfddddaf85526facfa100add0588583ce4bb9d3338560405161052a929190611fbc565b60405180910390a1600060208501515151600281111561054c5761054c611af2565b14156107025760208085015151015181526105693415601b6111e8565b61058361057c338460200151600061120e565b601c6111e8565b81516105a9906001600160a01b0316331461059f5760016105a2565b60005b601d6111e8565b60006105b433610b12565b5160018111156105c6576105c6611af2565b14156105d85760016020820152610603565b60016105e333610b12565b5160018111156105f5576105f5611af2565b141561060357600060208201525b6106128160200151601e6111e8565b8051516040519081527f4cc79d9d849c4ed43cdd1b7cde1d8799245cbca450226bf1c2807accde4c6aae9060200160405180910390a18051518352336000908152600460205260409020805460ff191660019081178255825151910155610677611780565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808301516106be90600190612037565b602080830180519290925260a085015182519091015280514360409091015260c084015181516060015260e08401519051608001526106fc81611226565b506108c1565b600160208501515151600281111561071c5761071c611af2565b14156108385761072e3415601f6111e8565b610748610741338460200151600061120e565b60206111e8565b815161076e906001600160a01b03163314610764576001610767565b60005b60216111e8565b7fce4bfcd2f2962ce4740b8b7dc261558bdba494930790ad7998e98e95cb8763c182604001516040516107a391815260200190565b60405180910390a1604082015160208401526107bd611780565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015184860180519190915260a088015181519095019490945283514393019290925260c086015183519091015260e0850151915101526106fc81611226565b600260208501515151600281111561085257610852611af2565b14156108c157610864341560226111e8565b61087e610877338460200151600061120e565b60236111e8565b604051600181527f3c748c0d3e7c11c5fa6148dfe51d1799a48e729ed6211096bc48786897ec25eb9060200160405180910390a1600160408401526107bd611780565b50505050565b6108d7600160005414600b6111e8565b81516108f29015806108eb57508251600154145b600c6111e8565b60008080556002805461090490611df6565b80601f016020809104026020016040519081016040528092919081815260200182805461093090611df6565b801561097d5780601f106109525761010080835404028352916020019161097d565b820191906000526020600020905b81548152906001019060200180831161096057829003601f168201915b5050505050806020019051810190610995919061204f565b90506109be60408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a1610a11341560086111e8565b60808201515151610a2490600190612037565b8151526080820180515160209081015183518201529051516040908101518351901515910152820151610a6590610a5e903390600161120e565b60096111e8565b8151610a7d906001600160a01b03163314600a6111e8565b610a85611780565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501805184518301526060808701518551909101528284018051600090819052915181519094019390935291514391015260808401518351610aec9290611348565b60208201805160600191909152516000608090910152610b0b81611226565b5050505050565b610b1a611714565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610b4957610b49611af2565b1415610bc0576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b8a57610b8a611af2565b6001811115610b9b57610b9b611af2565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610be060076000541460196111e8565b8151610bfb901580610bf457508251600154145b601a6111e8565b600080805560028054610c0d90611df6565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3990611df6565b8015610c865780601f10610c5b57610100808354040283529160200191610c86565b820191906000526020600020905b815481529060010190602001808311610c6957829003601f168201915b5050505050806020019051810190610c9e91906120ce565b604080516020808201835260008252825133815287518183015290870151511515818401529151929350917f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe9181900360600190a1610cff341560166111e8565b8151610d25906001600160a01b03163314610d1b576001610d1e565b60005b60176111e8565b6000610d3033610b12565b516001811115610d4257610d42611af2565b1415610d515760008152610d79565b6001610d5c33610b12565b516001811115610d6e57610d6e611af2565b1415610d7957600181525b8051610d869060186111e8565b604051600081527f67bee5b340c6e211e7a765dc4c9005374611f6eaa1e8ada00dcd7f5a08c5bf229060200160405180910390a160006060840152610dc96117b7565b825181516001600160a01b03918216905260208085015183519083169082015280830180516001905260408087015182519416939092019290925281514391015260608085015182519091015260808085015191510152610b0b816113bc565b610e3960056000541460146111e8565b8151610e54901580610e4d57508251600154145b60156111e8565b600080805560028054610e6690611df6565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9290611df6565b8015610edf5780601f10610eb457610100808354040283529160200191610edf565b820191906000526020600020905b815481529060010190602001808311610ec257829003601f168201915b5050505050806020019051810190610ef7919061213f565b60408051338152855160208083019190915286015115158183015290519192507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d919081900360600190a1610f4e341560126111e8565b8051610f66906001600160a01b0316331460136111e8565b610f95816020015182604001518360600151600060018110610f8a57610f8a6120b8565b6020020151516114f0565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610fd2573d6000803e3d6000fd5b5060008080556001819055610fe9906002906117e0565b505050565b610ffe60036000541460106111e8565b815161101990158061101257508251600154145b60116111e8565b60008080556002805461102b90611df6565b80601f016020809104026020016040519081016040528092919081815260200182805461105790611df6565b80156110a45780601f10611079576101008083540402835291602001916110a4565b820191906000526020600020905b81548152906001019060200180831161108757829003601f168201915b50505050508060200190518101906110bc91906121e1565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a161111b3415600d6111e8565b8051611133906001600160a01b03163314600e6111e8565b6020808401518051908201516040516111819361115b93929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826040015114600f6111e8565b6111896117b7565b815181516001600160a01b0391821690526020808401518351908316908201528083018051600190528451815193169290910191909152805143604090910152606080840151825190910152608080840151915101526108c1816113bc565b816102095760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061121c83853085611504565b90505b9392505050565b602080820151908101519051116112dc5761123f61181a565b8151516001600160a01b039081168252825160209081015190911681830152825160409081015181840152835160609081015181850152828501805151608080870191909152815185015160a087015281519092015160c086015251015160e0840152600860005543600155516112b891839101612270565b60405160208183030381529060405260029080519060200190610fe9929190611877565b6112e46118fb565b8151516001600160a01b0390811682528251602090810151909116818301528251606090810151604080850191909152828501805183015192850192909252905160809081015190840152600360005543600155516112b8918391016122df565b50565b611350611931565b60005b600181101561139c5784816001811061136e5761136e6120b8565b6020020151828260018110611385576113856120b8565b6020020152806113948161232d565b915050611353565b50818184600181106113b0576113b06120b8565b60200201529392505050565b60408051602081019091526000815260208201515115611463576113de61197c565b8251516001600160a01b03908116825283516020908101518216818401528085018051820151909216604080850191909152825160609081015190850152915160809081015190840152600760005543600155905161143f91839101612348565b604051602081830303815290604052600290805190602001906108c1929190611877565b81515160208084015101516001600160a01b0390811691161481526114866119a5565b8251516001600160a01b039081168252835160209081015182168184015280850180518201519092166040808501919091528251606090810151908501529151608090810151908401528351151560a0840152600560005543600155905161143f91839101612387565b6114fb8383836115de565b610fe957600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161156b916123e3565b60006040518083038185875af1925050503d80600081146115a8576040519150601f19603f3d011682016040523d82523d6000602084013e6115ad565b606091505b50915091506115be828260016116af565b50808060200190518101906115d391906123ff565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161163d916123e3565b60006040518083038185875af1925050503d806000811461167a576040519150601f19603f3d011682016040523d82523d6000602084013e61167f565b606091505b5091509150611690828260026116af565b50808060200190518101906116a591906123ff565b9695505050505050565b606083156116be57508161121f565b8251156116ce5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611205565b60405180608001604052806000815260200160008152602001600015158152602001600081525090565b60408051606081019091528060005b815260006020820181905260409091015290565b6040518060400160405280600081526020016117516119ce565b905290565b60405180604001604052806000815260200161175160405180602001604052806000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908152602081016117516119e1565b604080516080810182526000918101828152606082019290925290815260208101611751611a09565b5080546117ec90611df6565b6000825580601f106117fc575050565b601f0160209004906000526020600020908101906113459190611a3c565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200161186a611931565b8152602001600081525090565b82805461188390611df6565b90600052602060002090601f0160209004810192826118a557600085556118eb565b82601f106118be57805160ff19168380011785556118eb565b828001600101855582156118eb579182015b828111156118eb5782518255916020019190600101906118d0565b506118f7929150611a3c565b5090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200161186a5b60405180602001604052806001905b611966604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816119405790505090565b6040805160a081018252600080825260208201819052918101919091526060810161186a611931565b6040805160c0810182526000808252602082018190529181019190915260608101611723611931565b6040518060200160405280611751611a51565b6040518060a0016040528060008152602001600081526020016000815260200161186a611931565b6040518060a0016040528060001515815260200160006001600160a01b031681526020016000815260200161186a611931565b5b808211156118f75760008155600101611a3d565b604080516080810190915280600081526020016117236040518060200160405280600081525090565b600060a08284031215611a8c57600080fd5b50919050565b600060408284031215611a8c57600080fd5b600060408284031215611ab657600080fd5b61121f8383611a92565b6001600160a01b038116811461134557600080fd5b600060208284031215611ae757600080fd5b813561121f81611ac0565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611b1f57611b1f611af2565b808352506020830151151560208301526040830151604083015292915050565b600060208284031215611b5157600080fd5b5035919050565b60005b83811015611b73578181015183820152602001611b5b565b838111156108c15750506000910152565b8281526040602082015260008251806040840152611ba9816060850160208701611b58565b601f01601f1916919091016060019392505050565b600060608284031215611a8c57600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611c0957611c09611bd0565b60405290565b6040516020810167ffffffffffffffff81118282101715611c0957611c09611bd0565b6040516080810167ffffffffffffffff81118282101715611c0957611c09611bd0565b6040516060810167ffffffffffffffff81118282101715611c0957611c09611bd0565b60405160a0810167ffffffffffffffff81118282101715611c0957611c09611bd0565b801515811461134557600080fd5b600081830360a0811215611cbc57600080fd5b611cc4611be6565b833581526080601f1983011215611cda57600080fd5b611ce2611c0f565b611cea611c32565b602086013560038110611cfc57600080fd5b81526020603f1985011215611d1057600080fd5b611d18611c0f565b60408701358152602082015260608601359350611d3484611c9b565b83604082015260808601359350611d4a84611c9b565b606081019390935291825260208101919091529392505050565b600060408284031215611d7657600080fd5b611d7e611be6565b823581526020830135611d9081611c9b565b60208201529392505050565b60008183036040811215611daf57600080fd5b611db7611be6565b833581526020601f1983011215611dcd57600080fd5b611dd5611c0f565b91506020840135611de581611c9b565b825260208101919091529392505050565b600181811c90821680611e0a57607f821691505b60208210811415611a8c57634e487b7160e01b600052602260045260246000fd5b60008183036060811215611e3e57600080fd5b611e46611be6565b833581526040601f1983011215611e5c57600080fd5b611e64611be6565b60208581013582526040909501358582015293810193909352509092915050565b8051610bcb81611ac0565b600082601f830112611ea157600080fd5b611ea9611c0f565b80606080850186811115611ebc57600080fd5b855b81811015611f0d57828189031215611ed65760008081fd5b611ede611c55565b8151815260208083015181830152604080840151611efb81611c9b565b90830152908652909401938201611ebe565b50919695505050505050565b60006101408284031215611f2c57600080fd5b604051610100810181811067ffffffffffffffff82111715611f5057611f50611bd0565b604052611f5c83611e85565b8152611f6a60208401611e85565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a0820152611fa48460c08501611e90565b60c0820152610120929092015160e083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160c08301919060038110611fef57611fef611af2565b8060408501525060208101515160608401526040810151151560808401526060810151151560a0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561204a5761204a612021565b500190565b600060e0828403121561206157600080fd5b612069611c78565b825161207481611ac0565b8152602083015161208481611ac0565b8060208301525060408301516040820152606083015160608201526120ac8460808501611e90565b60808201529392505050565b634e487b7160e01b600052603260045260246000fd5b600060e082840312156120e057600080fd5b6120e8611c78565b82516120f381611ac0565b8152602083015161210381611ac0565b6020820152604083015161211681611ac0565b60408201526121288460608501611e90565b606082015260c09290920151608083015250919050565b6000610100828403121561215257600080fd5b60405160c0810181811067ffffffffffffffff8211171561217557612175611bd0565b604052825161218381611ac0565b8152602083015161219381611ac0565b602082015260408301516121a681611ac0565b60408201526121b88460608501611e90565b606082015260c0830151608082015260e08301516121d581611c9b565b60a08201529392505050565b600060e082840312156121f357600080fd5b6121fb611c78565b825161220681611ac0565b8152602083015161221681611ac0565b6020820152604083810151908201526121288460608501611e90565b8060005b60018110156108c1578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612236565b60006101408201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c08301516122cd60c0840182612232565b5060e083015161012083015292915050565b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608083015160e083019161231c90840182612232565b50608083015160c083015292915050565b600060001982141561234157612341612021565b5060010190565b81516001600160a01b0390811682526020808401518216908301526040808401519091169082015260608083015160e083019161231c90840182612232565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060808301516101008301916123c790840182612232565b50608083015160c083015260a090920151151560e09091015290565b600082516123f5818460208701611b58565b9190910192915050565b60006020828403121561241157600080fd5b815161121f81611c9b56fea2646970667358221220f1e145f196a5f3e6541504f237085ca55cbd146c4b8dedc9a97bbd96d9f5365b64736f6c634300080c0033`,
  BytecodeLen: 10790,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:121:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:148:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:161:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:126:48:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:65:48:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Attacher_getNum": Attacher_getNum,
  "Attacher_getTicketsA": Attacher_getTicketsA,
  "Attacher_optIn": Attacher_optIn,
  "Attacher_seeOutcome": Attacher_seeOutcome,
  "Deployer": Deployer
  };
export const _APIs = {
  Attacher: {
    getNum: Attacher_getNum,
    getTicketsA: Attacher_getTicketsA,
    optIn: Attacher_optIn,
    seeOutcome: Attacher_seeOutcome
    }
  };
