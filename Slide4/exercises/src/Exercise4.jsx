import { useState } from 'react'
const Statistics = (props)=>{
    return(
    <div>
        {(props.good + props.neutral + props.bad) > 0 ? (
    <div>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
    </div>
  ) : (
    <p>No feedback Given</p>
  )}
    </div>
    )
}
const App4 =()=>{
    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    return(
        <div>
          <h3>Give Feedback</h3>
            <button onClick ={()=>
            setGood(good+1)}>good</button>
            <button onClick={()=>
            setNeutral(neutral+1)}>neutral</button>
            <button onClick={()=>
            setBad(bad+1)}>bad</button>
            <h3>Statistics</h3>
            <Statistics good={good} neutral={neutral} bad={bad} />

        </div>
    )
}
export default App4