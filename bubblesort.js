function bubbleSort(arr){
  for(let segVuelta = 1; segVuelta < arr.length; segVuelta++){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        swap(arr,i)
      }
    }
  }
    return arr
  }

function swap(arr,i){
    let temporal = arr[i]
    arr[i] = arr[i+1]
    arr[i+1] = temporal
}



