describe('Split Array function', function() {
  it('es capaz de dividir el arreglo en dos partes', function() {
    expect( split([1, 2, 3, 4, 5, 6]) ).toEqual( [[1,2,3],[4,5,6]] );
  });
});

describe('Merge', function(){
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function(){
    expect( merge([1,2,3], [4,5,6]) ).toEqual( [1, 2, 3, 4, 5, 6] );
  });
});

describe('mergeSort', function(){
  it('utilizando split y merge, es capaz de ordenar el arreglo recibido por parametro', function(){
    expect(mergeSort([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});