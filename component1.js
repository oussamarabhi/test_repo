import React, { useState } from "react";

// A simple functioal component in React
const SimpleComponent = () => {
  // Using React hooks to manages state
  const [count, setCount] = useState(0);

  // Function for incrementing the count
  const increment = () => {
    setCount(count + 1); // Incrementing the count by 1
  };

  // Function decrement the count
  const decrement = () => {
    setCount(count - 1); // Decrementing the count by 1
  };

  return (
    // JSX code for the component
    <div>
      <p>Count: {count}</p> {/* Displays the current count */}
      <button onClick={increment}>Increment</button>{" "}
      {/* Button for increment the count */}
      <button onClick={decrement}>Decrement</button>{" "}
      {/* Button for decrement the count */}
    </div>
  );
};

/* 
Me and him, we was going to they house yesterday, but we didn't went cause it was 
raining so hard and we ain't had no umbrellas, so we had to stayed home instead and watchin' 
some movie on the TV, but the cable was out so we couldn't able to seen 
it anyways, and now I'm feeling so bored and want to do something more funner with my friends but they all ain
*/

export default SimpleComponent;
