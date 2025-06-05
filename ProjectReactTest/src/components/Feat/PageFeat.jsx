import { useState } from "react";
import { Checkbox } from "../form/Checkbox";
import { Text } from "../form/Text";
import { useFetch } from "../hooks/useFetch";
import { CountButton } from "./CountButton";
import { DisplayJSON } from "./DisplayJSON";
import { EditInput } from "./EditInput";
import { InputChrono } from "./InputChrono";
import { Login } from "./Login";
import { TitleText } from "./TitleText";

export function PageFeat() {
    const [displayTitle, setDisplayTitle] = useState(true)
    const [title, setTitle] = useState('')
    const [firstname, setFirstname] = useState('')

    return (
        <>
            <DisplayJSON />
            <Text />
            <TitleText />
            <CountButton/>
            <Login />
            <InputChrono />
            <Checkbox 
                checked={displayTitle}
                onChange={setDisplayTitle}
                id="titleshow"
                label="Afficher le champs titre"
            />
            {displayTitle && <EditInput
                         setTitle={setTitle}
                         title={title}
                         setFirstname={setFirstname}
                         firstname={firstname} />}
        </>
    )
}