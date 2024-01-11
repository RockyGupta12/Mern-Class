import {useState} from 'react'
const App1 =()=>{
   const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    return(
        <div>
            <h4><strong>give Feedback</strong></h4>
            <button onClick ={()=>{
                setGood(good+1)
            }}>good</button>

            <button onClick ={()=>
            setNeutral(neutral+1)}>neutral</button>

            <button onClick ={()=>
            setBad(bad+1)}>bad</button>
            <h4><strong>Statistics</strong></h4>
             <br/>
            <p>good:{good}</p>
            <p>neutral:{neutral}</p>
            <p>bad:{bad}</p>
         </div>
    )
}
export default App1