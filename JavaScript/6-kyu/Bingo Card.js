// https://www.codewars.com/kata/566d5e2e57d8fae53c00000c

// function getCard() {
//     // Start your coding here...
// }

function getCard() {
    return 'BINGO'.split('').map((char, index) => {
      var set = new Set();
      do {
        set.add(Math.floor(Math.random() * 15) + (index * 15 + 1));
      } while (set.size < (index === 2 ? 4 : 5));
      return Array.from(set).map(n => `${char}${n}`);
    }).reduce((result, entry) => [...result, ...entry], []);
}
