
/**
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange 
 */
export function Input({placeholder, value, onChange,type}) {
    return (
        <div>
            <input 
                type={type} 
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)} 
            />
        </div> 
    ) 

}