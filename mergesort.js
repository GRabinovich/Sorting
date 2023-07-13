function split(arr) {
  let mitad = Math.floor(arr.length / 2)

  let primerMitad = arr.slice(0, mitad)
  let segundaMitad = arr.slice(mitad)
  

  return [primerMitad, segundaMitad];
}

function merge(arr1, arr2) {
  let arrFinal = []
  let i = 0
  let j = 0
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      arrFinal.push(arr1[i])
      i++
    } else {
      arrFinal.push(arr2[j])
      j++
    } 
  }

  let elementosFaltantes

  if(i === arr1.length){
    elementosFaltantes = arr2.slice(j)
  } else {
    elementosFaltantes = arr1.slice(i)
  }

  return arrFinal.concat(elementosFaltantes)
}

function mergeSort(arr){
  if(arr.length <= 1){
    return arr
  }

  let izq = split(arr)[0]
  let der = split(arr)[1]


  return merge(mergeSort(izq), mergeSort(der))
}
