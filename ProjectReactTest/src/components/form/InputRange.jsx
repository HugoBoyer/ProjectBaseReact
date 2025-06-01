export function InputRange({onChange, value}) {
    return (
        <input 
            type="range"
            min={0}
            max={10}
            onChange={(e) => onChange(Number(e.target.value))} 
            value={value}
        />
    )
}