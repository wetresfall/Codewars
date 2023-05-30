// https://www.codewars.com/kata/544034f426bc6adda200000e

// function findBall(scales) {
// // call scales.getWeight() max 2 times
// // return indexOfHeavyBall;
//     for (var i = 1; i < 8; i++) {
//         var leftPan = [i - 1];
//         var rightPan = [i];
//         var w = scales.getWeight(leftPan, rightPan);

//         if (w === -1) {// left pan is heavier
//             return leftPan[0];
//         }

//         if (w === 1) {// right pan is heavier
//             return rightPan[0];
//         }
//     }
// }

function findBall(scales) {
    let a = scales.getWeight([0,1,2],[3,4,5]),
        b = a==-1 ? [0,1,2] : a==1 ? [3,4,5] : [6,7],
        c = scales.getWeight([b[0]],[b[1]]);
    return c==-1 ? b[0] : c==1 ? b[1] : b[2];
}
