import { useState } from "react"
import { InputLogin } from "../form/InputLogin"
import { useDocumentTitle } from "../hooks/useDocumentTitle"

export function TitleText() {

    const [name, setName] = useState("")
    useDocumentTitle(name ? `Editer  ${name}` : null)
    return (
            <div>
                <InputLogin value={name} onChange={setName}/>
                <p>Title </p>
                <br/>
                -------------------------------------------------
            </div>
    )
}



