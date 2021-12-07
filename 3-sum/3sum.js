var threeSum = function (a) {
  const nums = a.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < nums.length - 2; i++) {
    const n1 = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    if (n1 != nums[i - 1]) {
      while (left < right) {
        const n2 = nums[left];
        const n3 = nums[right];
        const sum = n1 + n2 + n3;

        if (sum === 0) {
          triplets.push([n1, n2, n3]);

          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};

// Forma no óptima
var threeSum1 = function (nums) {
  const triplets = [];

  const isAdded = function (arr) {
    return triplets.some(function (a) {
      return a[0] == arr[0] && a[1] == arr[1];
    });
  };

  for (let i = 0; i < nums.length - 2; i++) {
    const n1 = nums[i];

    for (let j = i + 1; j < nums.length - 1; j++) {
      const n2 = nums[j];

      for (let k = j + 1; k < nums.length; k++) {
        const n3 = nums[k];

        if (n1 + n2 + n3 === 0) {
          const arr = [n1, n2, n3].sort((a, b) => a - b);
          if (!isAdded(arr)) {
            triplets.push(arr);
          }
        }
      }
    }
  }

  return triplets;
};

export default threeSum

//https://jsben.ch/pmoXF