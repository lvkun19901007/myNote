
// 插入排序
// 时间复杂度为O(n^2)
function insertionSort(arr: number[]): number[] {
  // 对于数组的每一个元素，从它开始到0位置，比较该元素和前一个元素的大小
  for(let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    // 如果该元素小于前一个元素，那么前一个元素向后移动，并继续向前比较
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // 如果该元素大于前一个元素，那么它将放到合适的位置
    arr[j + 1] = current;
  }  
  return arr;
}




