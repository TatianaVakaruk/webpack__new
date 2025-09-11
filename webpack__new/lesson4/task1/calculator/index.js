export const sum = (a, b) => {
  console.log('implementation for sum');
  return a + b;
};

export const mult = (a, b) => {
  console.log('implementation for mult');
  return a * b;
};

// экспортируйте calc как export по умолчанию

const calc = expression => {
  console.log('implementation for calc');
  let arr = expression.split(" ");

  switch (arr[1]) {
  case "+": 
  console.log(+arr[0] + +arr[2]);
  break;
  case "-":
    console.log(+arr[0] - +arr[2]);
    break;
    case "*":
   console.log(+arr[0] * +arr[2]);
    break;
    case "/":
   console.log(+arr[0] / +arr[2]); 
   break; 
  }
  
};
export default calc;
