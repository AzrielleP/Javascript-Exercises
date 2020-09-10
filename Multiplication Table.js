multiplicationTable = function(size) {
  let table = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      table.length !== 0 ? row.push((i+1)*j) : row.push(i+j);
    }
    table.push(row);
  }
  return table;
}