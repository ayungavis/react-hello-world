import React, { useState, useEffect } from "react";

// component that have props
function HomePage(props) {
  // how to use useState, title is the variable name, setTitle is the function to change title
  const [title, setTitle] = useState(props.title);

  // componentDidMount, run when component was rendered
  useEffect(() => {});

  // componentWillMount, run when component didn't rendered yet
  useEffect(() => {
    setTitle("Title useEffect");
  }, []); // we can add parameter inside the array

  return <div onClick={() => setTitle("Title baru")}>{title}</div>;
}

export default HomePage;
