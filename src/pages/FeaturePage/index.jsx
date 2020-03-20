import React, { useState, useEffect } from "react";

class FeaturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  componentDidUpdate() {}

  componentWillMount() {}

  componentDidMount() {}

  handleAdd = () => {
    this.setState({ counter: counter + 1 });
  };

  handleRemove = () => {
    this.setState({ counter: counter - 1 });
  };

  renderButton() {
    return <button onClick={handleAdd}>Add</button>;
  }

  render() {
    return (
      <div>
        {this.renderButton()}
        <button onClick={handleRemove}>Remove</button>
      </div>
    );
  }
}

export default FeaturePage;

const Feature = () => {
  const [counter, setCounter] = useState();

  // componentDidMount
  useEffect(() => {
    console.log("looping");
  });

  // componentWillMount
  useEffect(() => {
    alert("Awal muncul");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("ts");
  }, [counter]);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    setCounter(counter - 1);
  };

  function renderButton() {
    return <button onClick={handleAdd}>Add</button>;
  }

  function renderCondition() {
    if (counter === 2) return <div>Sama dengan 2</div>;
    if (counter === 5) return <div>Sama dengan 5</div>;
    else return <div>Counter: {counter}</div>;
  }

  return (
    <div>
      {renderButton()}
      <button onClick={handleRemove}>Remove</button>
      {renderCondition()}
    </div>
  );
};

export default Feature;
