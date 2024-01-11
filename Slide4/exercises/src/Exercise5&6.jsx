import { useState } from "react";

const App5 = () => {
  const quotes = [
    "A rose by any other name would smell as sweet.",
    "All that glitters is not gold.",
    "All that world a stage,and all the men and women merely players.",
  ];

  const [selected, setSelected] = useState(0);

  const nextQuote = () => {
    if (selected < quotes.length-1) {
      setSelected(selected+1)
    } else {
        setSelected(0)
    }
  };

  return (
    <div>
      {quotes[selected]}
      <br />
      <button onClick={nextQuote}>Next quote</button>
    </div>
  );
};

export default App5
