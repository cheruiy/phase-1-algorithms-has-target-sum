function hasTargetSum(array, target) {
  // Write your algorithm here
  array.sort((a, b) => a - b);

  // Initialize two pointers, one at the beginning and one at the end of the array
  let left = 0;
  let right = array.length - 1;

  // Iterate until the pointers meet or cross each other
  while (left < right) {
    // Calculate the sum of the elements at the current positions of the pointers
    const sum = array[left] + array[right];

    // If the sum is equal to the target, return true
    if (sum === target) {
      return true;
    }
    // If the sum is greater than the target, move the right pointer to the left
    else if (sum > target) {
      right--;
    }
    // If the sum is less than the target, move the left pointer to the right
    else {
      left++;
    }
  }

  // If no pair with the target sum is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
