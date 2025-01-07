import React from "react";

const Test = () => {
  //   let x = 1;
  //   function greet() {
  //     console.log(x);
  //     let x = 2;
  //   }
  //   greet();

  //   const arr = [10, 20, 30];
  //   for (var i = 0; i < arr.length; i++) {
  //     // console.log(arr[i]);
  //     setTimeout(() => console.log(arr[i]), 1000);
  //   }
  // if I use a let instead of var in the above that will work beacuse the let is a block scoped which makes it indiviual i value for each iteration where as var is function scope so that make single i value for all the interation hence oon accessing it after 1 min of time out it make i value as 3 and return arr[3] as undefined

  function outer() {
    let count = 0;
    function inner() {
      count++;
      return count;
    }
    return inner();
  }

  const increment = outer();
  console.log(increment); // 1 in this we can see that the inner function will have the access for its outer function variable that is nothing but the Closures
  // What is closures
  // Closures are the funtion which has the access to thier outer function's scope, even after the outer function exacuted

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sucess");
    }, 1000);
    setTimeout(() => {
      reject("failed");
    }, 2000);
  });

  promise
    .then((response) => console.log(response))
    .catch((response) => console.log(response));
  return <div>test</div>;
};

export default Test;
