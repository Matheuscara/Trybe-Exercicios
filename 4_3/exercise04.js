let n = 5;

for (let i = 1; i <= n; i+=2) {
  let row = "";
  let space = "";

  for (let j = n-i; j < n; j++) {
    row = row + "*";
  }
  
  for (let k = n-i; k > 0; k-= 2) {
    space = space + " ";
  }

  row = space + row;

  console.log(row);
}