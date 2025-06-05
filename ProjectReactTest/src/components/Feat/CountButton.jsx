import { InputLogin } from "../form/InputLogin"
import { useIncrement } from "../hooks/useIncrement"

export function CountButton() {
    const {count, increment, decrement} = useIncrement({
        base:0,
        max: 10,
        min: 0
      })
    return (
    <div>
        <div>
        Compteur {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
        <br/>
      ---------------------------------------------------------
    </div>
    )
}