
// 冒泡排序
// 时间复杂度为O(n^2)
function bubbleSort(arr: number[]): number[] {
  // 外层循环，控制需要比较的轮数
  for (let i = 0; i < arr.length - 1; i++) {
    // 内层循环，控制每轮需要比较的次数
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}




