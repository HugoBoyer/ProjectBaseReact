import { useId } from "react"

/**
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange 
 */
 export function InputLogin({placeholder, value, onChange,type,label}) {
   const id = useId()
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <br/>
            <input 
                id={id}
                type={type} 
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)} 
            />
        </div> 
    ) 

}