import { useState } from 'react'
const Statistics = (props)=>{
    return(
    <div>
        <p>good: {props.good}</p>
        <p>neutral: {props.neutral}</p>
        <p>bad: {props.bad}</p>

       <p>good: {(props.good / (props.good + props.neutral + props.bad)) * 100}%</p>
       <p>neutral: {(props.neutral / (props.good + props.neutral + props.bad)) * 100}%</p>
       <p>bad: {(props.bad / (props.good + props.neutral + props.bad)) * 100}%</p>
    </div>
    )
}
const App3 =()=>{
    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    return(
        <div>
          <h3>Statistics</h3>
            <button onClick ={()=>
            setGood(good+1)}>good</button>
            <button onClick={()=>
            setNeutral(neutral+1)}>neutral</button>
            <button onClick={()=>
            setBad(bad+1)}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} />

        </div>
    )
}
export default App3