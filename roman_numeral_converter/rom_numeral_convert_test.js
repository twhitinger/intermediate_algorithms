

describe('diffArray', function(){
  context('when using builtin methods', function(){
    it('should return single array', function() {

       expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);).to.eq([4]);
    });
  });
});

//     xit('should have a default null value for left and right nodes', function(){
//       var node = new TreeNode(0);
//       expect(node.left).to.eq(null);
//       expect(node.right).to.eq(null);
//     });
//
//     xit('can have a left node', function(){
//       var node1 = new TreeNode(1);
//       var node2 = new TreeNode(0, node1);
//       expect(node2.left.data).to.eq(1);
//     });
//
//     xit('can assign a right node', function(){
//       var node1 = new TreeNode(1);
//       var node2 = new TreeNode(0, null, node1);
//       expect(node2.right.data).to.eq(1);
//     });
// });
