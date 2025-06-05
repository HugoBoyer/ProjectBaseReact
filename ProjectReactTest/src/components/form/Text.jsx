import { useEffect, useState } from "react"
import { useRef } from "react"
import { useToggle } from "../hooks/useToggle"
import { Checkbox } from "./Checkbox"
import { InputLogin } from "./InputLogin"

export function Text() {
    const ref = useRef(null)
    const [checked, toggleCheck] = useToggle()
    console.log('App', ref)

    return (
        <div>
             <Checkbox 
      checked={checked}
      onChange={toggleCheck}   
    />
    {checked && "Je suis coché"}
            <InputLogin 
                ref={ref} 
                label="prefix"/>
          <br/>
        <br/>
        <br/>
    ----------------------------------------------------
        </div>
      
    )
}