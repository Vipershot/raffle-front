const createNumbersArray = (number: number) => {
    const startNumber = 1;
    const endNumber = number;
    const numbers = [];
  
    for (let number = startNumber; number <= endNumber; number++) {
      numbers.push(number);
    }
  
    return numbers;
  }
  
  export default createNumbersArray;
  