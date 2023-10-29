import React from "react";

// A simple page component in React
const PageComponent = () => {
  // Defining some sample data
  const data = [
    { id: 1, title: "First Item", content: "Content of the first item" }, // First data points.
    { id: 2, title: "Second Item", content: "Content of the second item" }, // 2nd data points.
    { id: 3, title: "Third Item", content: "Content of the third item" } // Third data points.
  ];

  return (
    // JSX code for the page component
    <div>
      <h1>Page Component</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageComponent;
