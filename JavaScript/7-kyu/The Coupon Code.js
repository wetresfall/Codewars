// https://www.codewars.com/kata/539de388a540db7fec000642

checkCoupon = (EC, CC, CD, ED) => EC === CC && new Date(CD) <= new Date(ED);
