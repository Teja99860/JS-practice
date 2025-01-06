import React from "react";

const Test = () => {
  //   let x = 1;
  //   function greet() {
  //     console.log(x);
  //     let x = 2;
  //   }
  //   greet();

  const arr = [10, 20, 30];
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    setTimeout(() => console.log(arr[i]), 1000);
  }

  

  return <div>test</div>;
};

export default Test;
