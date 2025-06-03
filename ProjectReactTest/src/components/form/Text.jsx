import { useEffect, useState } from "react"
import { useRef } from "react"
import { InputLogin } from "./InputLogin"

export function Text() {
    const ref = useRef(null)
    console.log('App', ref)

    return (
        <div>
            <InputLogin 
                ref={ref} 
                label="prefix"/>
          <br/>
        <br/>
        </div>
      
    )
}