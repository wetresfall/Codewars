// https://www.codewars.com/kata/5b6375f707a2664ada00002a

const whosOnline = (friends) => {
// Your code here...
  let outcome = {};
  friends.forEach (e => {
    let status = e.status;
    if (status === 'online' && e.lastActivity > 10) status = 'away';
    let time = outcome[status];
    if ( outcome[status]) {
      outcome[status].push(e.username);
    }
    else {
      outcome[status] = [e.username];
    }
  });
  return outcome;
}
