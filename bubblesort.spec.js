describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('reciba un arreglo desordenado que termine ordenado', function(){
    expect( bubbleSort([4, 3, 9, 8, 6]) ).toEqual( [3, 4, 6, 8, 9] );
  });
  it('reciba un arreglo ordenado que debe mantenerse ordenado', function(){
    expect( bubbleSort([1, 2, 3, 4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
  });

})

describe('probando spies', function() {
  it('devuelva la cantidad de veces que se usó swap para ordenar el arreglo', function () {
    spyOn(window, 'swap').and.callThrough(); 
    // callThrough le dice al spy que utilice el método original chocolate['masticar'], 
    // mientras que `callFake` haría una copia.
    let arr = [2,3,1]
    window.bubbleSort(arr);
    expect(window.swap.calls.count()).toEqual(2);
  });
});


