import { useState } from "react";

const App8 = () => {

  let quotes = [
    "A rose by any other name would smell as sweet.",
    "All that glitters is not gold.",
    "All that world a stage,and all the men and women merely players."
  ];

  const [selected, setSelected] = useState(0);
  const [highestIndex, setHighestIndex] = useState(0);
  const [points, setPoints] = useState([0,0,0]);

  const nextQuote = () => {
    if(selected === quotes.length -1) {
      setSelected(0);
    } else {
      setSelected(selected+1)
    }
  }

  const checkHighestVote = () => {
    console.log("checking")
    // loop points and check which index has highest
    // set highest index to a seperate state variable
  }

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    checkHighestVote();
    setPoints(copy);
  }

  return (
    <>
      <h1>Quote of the day</h1>
      <p>{quotes[selected]}</p>
      <button onClick={vote}>Vote</button>
      <button onClick={nextQuote}>Next quote</button>
      <h1>Quotes</h1>
      <p>{quotes[selected]}</p>
      <p>has {points[selected]} votes.</p>
      <button onClick={vote}>Vote</button>
      <button onClick={nextQuote}>Next quote</button>
    </>
  )
}

export default App8