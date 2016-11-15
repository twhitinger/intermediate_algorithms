

describe('diffArray', function(){
  context('when using builtin methods', function(){
    it('should return single array', function() {
      let array = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


      expect(array).to.be.instanceof(Array);
      expect(array).to.include(4);
      expect(array.length).to.eql(1);
      expect(array[0]).to.eql(4);
    });
  });
});
