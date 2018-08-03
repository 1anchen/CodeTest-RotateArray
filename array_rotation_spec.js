const assert = require('assert');
const ArrayRotation = require('./array_rotation.js');

describe('ArrayRotation', function () {

  it('should be able to rotate 3 times', function () {
    const arrayRotation= new ArrayRotation();
    assert.deepStrictEqual(arrayRotation.rotate([1,2,3,4,5],3), [3,4,5,1,2]);
  });

  it('should be able to rotate 4 times', function () {
    const arrayRotation= new ArrayRotation();
    assert.deepStrictEqual(arrayRotation.rotate([1,2,3,4,5],4), [2,3,4,5,1]);
  });

  it('should be able to rotate 8 times', function () {
    const arrayRotation= new ArrayRotation();
    assert.deepStrictEqual(arrayRotation.rotate([1,2,3,4,5],8), [3,4,5,1,2]);
  });

  it('should be able to rotate 5 times', function () {
    const arrayRotation= new ArrayRotation();
    assert.deepStrictEqual(arrayRotation.rotate([1,2,3,4,5],5), [1,2,3,4,5]);
  });

  it('should be able to rotate 2 times', function () {
    const arrayRotation= new ArrayRotation();
    assert.deepStrictEqual(arrayRotation.rotate([19,5,78,9,5,37,45],2), [37,45,19,5,78,9,5]);
  });
  
});
