function binarySearch(list, item) {
  let lowIndex = 0;
  let highIndex = list.length - 1;

  while (lowIndex <= highIndex) {
    let middle = Math.floor((lowIndex + highIndex) / 2)
    let guess = list[middle]

    if(guess === item) {
      return middle
    }
    else if (guess > item) {
      highIndex = --middle
    }
    else {
      lowIndex = ++middle
    }
  }

  return null
}

let arr = ['a', 'b', 'c', 'd', 'e']
console.log(binarySearch(arr, 'b'))


