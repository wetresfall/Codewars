// https://www.codewars.com/kata/57f625992f4d53c24200070e

let bingo = (ticket, winner) => {
  if (ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= winner) {
    return 'Winner!'
  }
  return 'Loser!'
}
