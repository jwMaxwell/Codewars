var moveZeros = function (arr) {
  let n = 0;
  arr.forEach(t => {if(t === 0) return n++});
  arr = arr.filter(t => {if(t===null) return true; return t.toString() != '0'});
  for(let i = 0; i < n; i++) arr.push(0);
  return arr;
}