import { forwardRef, useId } from "react"

/**
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange 
 */
 export const InputLogin = forwardRef(function InputLogin({placeholder, value, onChange,type,label}, ref) {
   console.log(ref)
    const id = useId()
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <br/>
            <input 
                ref={ref}
                id={id}
                type={type} 
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange?.(e.target.value)} 
            />
        </div> 
    ) 

})