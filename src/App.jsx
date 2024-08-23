import Header from "./components/Header"
import Inputs from "./components/Inputs"
import { useState } from "react"
import Results from "./components/Results"

function App() {
  const [input,setInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
  })

  function handleChange(e){
    const {value, name} = e.target
    console.log(name)
    setInput((prev)=>{
        return {...prev,
            [name]: +value    //adding plus converts the string value to a number value, this prevents concatenation of strings when calling the calculate function.
        }
    })
  }
  let inputvalid=true
  if(input.duration<=0)
    inputvalid=false
  return (
    <div>
      <Header></Header>
      <Inputs userInput={input} onChangeInput={handleChange}></Inputs>
      {!inputvalid&&<p className="center">Duration should be greater than 0</p>}
      {inputvalid&&<Results userInput={input}></Results>}
    </div>
  )
}

export default App
