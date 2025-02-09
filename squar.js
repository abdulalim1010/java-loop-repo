let n = 100;


for (let i = 4; i <= n; i++) {
  let sqrt = Math.sqrt(i);
  if (sqrt === Math.floor(sqrt)) {  // Check if i is a perfect square
    console.log(i);  // Print the square number
    break;  // Stop the loop after finding the first square number
  }
}
