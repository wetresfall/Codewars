// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna){
  let pairs = '';
  [...dna].forEach(dp => {
    switch (dp) {
        case 'A': pairs += 'T';
        break;
        case 'T': pairs += 'A';
        break;
        case 'G': pairs += 'C';
        break;
        case 'C': pairs += 'G';
        break;
    }
  });
                   return pairs;
}
