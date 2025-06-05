import { useState } from "react"
import { useEffect } from "react"
import { Input } from "../form/Input"

export function InputChrono() {
  const [duration, setDuration] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(duration)
  


  const handleChange = (v) => {
    setDuration(v)

    setSecondsLeft(v)
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(v => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      })
    }, 1000)
    return () => {
      
      clearInterval(timer)
    }
  }, [duration])

  

  return (
    <div>
        <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Input 
        onChange={handleChange}
        value={duration}
      /> 
      <label>Chrono : {secondsLeft}</label>
      <br/>
      ---------------------------------------------------------
    </div>
  )
}