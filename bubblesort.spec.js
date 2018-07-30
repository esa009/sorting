describe('spy', function() {
    beforeAll(function (){
      spyOn(window, "swap").and.callThrough();
      spyOn(window, "compare").and.callThrough();
    });

    afterEach(function()
    {
       window.swap.calls.reset();
       window.compare.calls.reset();
    });


  it("tracks that the spy was called", function() {
    bubbleSort([3, 2, 5, 4, 1]);
    expect(window.swap.calls.count()).toEqual(6);
    window.swap.calls.reset();
    window.compare.calls.reset();
  });


  let  singleItemArray  = [1];
  let multipleItemArray = [3, 2, 5, 4, 1];
  let secArray = [1,2];


  it('when sorting an array with one item, swap is called only once', function () {
    bubbleSort([1]);
    expect(window.swap.calls.count()).toEqual(0);
    window.swap.calls.reset();
    window.compare.calls.reset();
  });

  it('when sorting an array with multiple items, swap is called the appropriate amount of times', function () {
    window.swap.calls.reset();
    bubbleSort(multipleItemArray);
    expect(window.swap.calls.count()).toEqual(6);
    window.swap.calls.reset();
    window.compare.calls.reset();
  });

  it('when sorting an array with multiple items, comparison is called the appropriate amount of times', function () {
    window.compare.calls.reset();
    bubbleSort([3,5,2]);
    expect(window.compare.calls.count()).toEqual(6);
  });

});

describe('Bubble Sort', function(){
  let singleItemArray  = [1];
  let multipleItemArray = [3, 2, 5, 4, 1];

beforeAll(function () {


  singleItemArray  = [1];
  multipleItemArray = [3, 2, 5, 4, 1];



});

// describe('compareSpy', function() {
// afterEach(function()
// {
//    window.swap.calls.reset();
//    window.compare.calls.reset();
// });

  // beforeAll(function (){
  //   //window.swap.calls.reset();

  //   spyOn(window, "compare").and.callThrough();

  //   window.compare.calls.reset();
  // });

let  arrayCheck  = [1];
let arraySize = [4,3];



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

//});
