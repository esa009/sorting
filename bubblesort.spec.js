/*describe('spy', function() {
  beforeEach(function() {
    swap(value1, value2, arr) = {

      }
    };
  it("tracks that the spy was called", function() {
    expect(swap).toHaveBeenCalled(6);
  });
});*/

describe('Bubble Sort', function(){
  let singleItemArray  = [1];
  let multipleItemArray = [3, 2, 5, 4, 1];

beforeAll(function () {
  singleItemArray  = [1];
  multipleItemArray = [3, 2, 5, 4, 1];
});

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with a single item', function(){
    expect( bubbleSort(singleItemArray)).toEqual( [1] );
  });

  it('handles an array with multiple items', function(){
    expect(  bubbleSort(multipleItemArray)).toEqual( [1, 2, 3, 4, 5] );
  });

  it('when sorting an array with one item, swap is called only once', function () {
  bubbleSort(singleItemArray);
  expect(swap.calls.count()).toEqual(0);
});

  it('when sorting an array with multiple items, swap is called the appropriate amount of times', function () {
  bubbleSort(singleItemArray);
  expect(swap.calls.count(multipleItemArray)).toEqual(6);
});

  it('when sorting an array with multiple items, comparison is called the appropriate amount of times', function () {
  bubbleSort(singleItemArray);
  expect(compare.calls.count(multipleItemArray)).toEqual(16);
});


});
