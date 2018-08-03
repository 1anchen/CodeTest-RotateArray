const ArrayRotation = function () {
}

ArrayRotation.prototype.rotate = function (numbersArray, counter) {

  const length = numbersArray.length;
  this.defualt(counter,length,numbersArray);
  counter = this.resetCounter(counter, length);
  const finalArray = this.rotateArray(length, counter, numbersArray);
  return finalArray;
}

ArrayRotation.prototype.defualt = function(counter, length, numbersArray){
  if(counter%length === 0){
    return numbersArray;
  }
}

ArrayRotation.prototype.resetCounter = function(counter, length){
  if(counter>length){
    counter = counter%length;
  }
  return counter;
}

ArrayRotation.prototype.rotateArray = function(length, counter, numbersArray){
  const tempArray = numbersArray.slice(length-counter)

  for(let i=0; i<length-counter; i++){
    tempArray.push(numbersArray[i]);
  }
  
  return tempArray;
}

module.exports = ArrayRotation;
