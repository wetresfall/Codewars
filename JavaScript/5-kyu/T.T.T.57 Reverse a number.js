// https://www.codewars.com/kata/57c786e858da9e5ed20000ea

function reverseNumber(n,s=n[0]=='-'?'-':''){
  //coding here...
  return s+n.slice(+!!s).match(/(.)\1*/g).reduce((r,s,i,a,v,x=r.length-1) => (
        !i || 1<r[x].length && Math.sign(s[0]-(v=a[i-1][0]))!=Math.sign(v-a[i-2][0]) ? r.push([s]) : r[x].push(s), r
    ),[]).map(a => a.reverse().join('')).join('').replace(/^0+/,'');
}

