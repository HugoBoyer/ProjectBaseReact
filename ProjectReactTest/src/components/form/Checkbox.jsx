/**
 * @param {boolean} checked 
 * @param {string} id
 * @param {string} label
 * @param {(v: boolean) => void)} onChange 
 */

export function Checkbox({checked, onChange, label, id}) {
    return (
        <div>
            <input
                id={id}
                type="checkbox"
                className="form-check-input" 
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label
                className="form-check-input"
                htmlFor={id}
            >{label}
            </label>
        </div>
    )
}