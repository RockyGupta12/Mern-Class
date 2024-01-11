import { useState } from "react"

const App7 = ()=>{
    const quotes =[
        "A rose by any other name would smell as sweet.",
        "All that glitters is not gold.",
        "All that world a stage,and all the men and women merely players."
    ]
    const [selected,setSelected] = useState(0)
    const [points,setPoints] = useState([0,0,0])
    const vote =()=>{
        console .log("vote increases");
        const copy = [...points]
        copy[selected] +=1
        setPoints(copy)
    }

    const nextquote =()=>{
        console.log("quotes change");
        if(selected < quotes.length-1){
            setSelected(selected+1)
        }
        else{
            setSelected(0)
        }
    }
    return(
        <div>
          <p>{quotes[selected]}</p>
          <p>has {points[selected]} votes.</p>
          <button onClick={vote}>Vote</button>
          <button onClick={nextquote}>Next quote</button>
        </div>
    )
}
export default App7