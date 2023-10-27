import React, { useState } from "react";\n
\n
// A simple functional component in React\n
const SimpleComponent = () => {\n
  // Using React hooks to manage state.
  const [count, setCount] = useState(0);\n
\n
  // Function for incrementing the count.
  const increment = () => {\n
    setCount(count + 1); // Incrementing the count by 1\n
  };\n
\n
  // Function for decrementing the count.
  const decrement = () => {\n
    setCount(count - 1); // Decrementing the count by 1\n
  };\n
\n
  return (\n
    // JSX code for the component\n
    <div>\n
      <p>Count: {count}</p> {/* Displays the current count */}\n
      <button onClick={increment}>Increment</button>{" "}\n
      {/* Button for incrementing the count */}\n
      <button onClick={decrement}>Decrement</button>{" "}\n
      {/* Button for decrementing the count */}\n
    </div>\n
  );\n
};\n
\n
export default SimpleComponent;\n
\n