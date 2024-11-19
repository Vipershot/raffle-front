function createNumbersArray() {
    const startNumber = 1;
    const endNumber = 1000;
    const numbers = [];
  
    for (let number = startNumber; number <= endNumber; number++) {
      numbers.push(number);
    }
  
    return numbers;
  }
  
  export default createNumbersArray;
  