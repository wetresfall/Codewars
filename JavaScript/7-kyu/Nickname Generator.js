// https://www.codewars.com/kata/593b1909e68ff627c9000186

let nicknameGenerator = (name) => name.length > 3 ? name.slice(0,  3 + 'aeiou'.includes(name[2])) : 'Error: Name too short'
