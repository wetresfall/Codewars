// https://www.codewars.com/kata/53897d3187c26d42ac00040d

// a and b are of type Node
// return whether there is a route from a to b
function getRoute(a, b) {
	let queue = [ ...a.edges ];
  let check = [a];
  
  while (queue.length) {
    const current = queue.shift();
    if (current == b) return true;
    else {
      if (!check.includes(current)) {
        check.push(current);
        queue = queue.concat(current.edges);
      }
    }
  }
  return false;
}
