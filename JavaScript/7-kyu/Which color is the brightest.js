// https://www.codewars.com/kata/62eb800ba29959001c07dfee

function brightest(colors) {
    function searchMax(str) {
        var r = parseInt((str[1] + str[2]), 16);
        var g = parseInt((str[3] + str[4]), 16);
        var b = parseInt((str[5] + str[6]), 16);
        return Math.max(r, g, b);
    };
    colors.sort((a, b) => searchMax(b) - searchMax(a));
    return colors[0];
};
