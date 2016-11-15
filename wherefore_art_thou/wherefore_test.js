describe('diffArray', function(){
  context('when using builtin methods', function(){
    it('should return single array', function() {
      const array = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


      expect(array).to.be.instanceof(Array);
      expect(array).to.include(4);
      expect(array.length).to.eql(1);
      expect(array[0]).to.eql(4);
    });

    it('should include unique values', function(){
      const test1 = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


      expect(test1[0]).to.eq("pink wool");
    });
  });
});
