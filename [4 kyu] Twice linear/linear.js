function dblLinear(n) {
  let queue = [1];
  let a = 0, b = 0;
  for(let i = 1; i < n + 1; i++){
    if(2 * queue[a] + 1 < 3 * queue[b] + 1){
      if(!queue.includes(2 * queue[a] +1)) queue.push(2 * queue[a] + 1);
      else i--;
      a++;
    } else {
      if(!queue.includes(3 * queue[b] + 1)) queue.push(3 * queue[b] + 1);
      else i--;
      b++;
    }
  }
  return queue[queue.length - 1];
}