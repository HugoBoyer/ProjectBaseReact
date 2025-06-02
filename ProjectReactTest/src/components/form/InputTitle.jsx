export function InputTitle({value, onChange}) {
    return ( <div>
        <input 
            onChange={(e) => onChange(e.target.value)} 
            value={value}
        />
    </div>
    )
  
    
}