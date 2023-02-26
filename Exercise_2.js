//Time complexity will be O(nlogn) and worst case will be O(n*n)
  
function swap(array, leftIndex, rightIndex){
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
  }
  
function partition(array, leftIndex, rightIndex) {
  let a = array
    let start = leftIndex
    let end = rightIndex
    let pivot = a[Math.floor((start + end) / 2)]
    
    while (start <= end ) {
      while (a[start] < pivot) {
        start++
      }
      while (a[end] > pivot) {
        end--
      }
      if( start <= end) {
        swap(a, start, end)
        start++
        end--
      }
    }
    return start
  }
  
function quickSort(array, leftIndex, rightIndex) {
  if (leftIndex < rightIndex) {
    let index = partition(array, leftIndex, rightIndex)
    quickSort(array, leftIndex, index-1)
    quickSort(array, index+1, rightIndex)
  }
  return array
}


var unsortedArray = [1,10,8,9,7,2]
var sortedArray = quickSort(unsortedArray, 0, unsortedArray.length - 1)
console.log(sortedArray)