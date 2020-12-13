function validBraces(braces) {
  let stack = [];
  const open = ['(', "[", '{'];
  const close = [')', ']', '}'];
  stack.push(braces[0]);
  for(let i = 1; i < braces.length; ++i) {
    stack.push(braces[i]);
    for(let k = 0; k < open.length; ++k)
    {
        if(stack[stack.length - 1] === close[k] && stack[stack.length - 2] === open[k]) {
            stack.pop();
            stack.pop();
            break;
        }
    }
  }
  return (stack.length === 0);
      return true;
  return false;
}