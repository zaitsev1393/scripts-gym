// Honestly I didn't figure it out on my own but
// the solution is so freaking awesome i just want to save it.

function countChange(money, coins) {
  if(money < 0 || coins.length == 0) return 0;
  if(money == 0) return 1;
  return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}