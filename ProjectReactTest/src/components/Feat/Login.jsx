import { useMemo, useState } from "react";
import { InputLogin } from "../form/InputLogin";

export function Login() {
    const [firstname, setFirstname] = useState("")
  const [password, setPassword] = useState("")
  const security = useMemo(() => {
    return password ? passwordSecurity(password) : "";
  }, [password])

  return (
    <div>
      <InputLogin 
        label="Nom d'utilisateur"
        value={firstname}
        onChange={setFirstname}
      />
      <br/>
      <InputLogin 
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Mot de passe"
      />
      {password && <div>Sécurité: {security}</div>}
      <br/>
      ---------------------------------------------------------
    </div>
  )
}

function passwordSecurity(password) {
    const lengthOK = password.length >= 8;
    const hasNumber = /[0-9]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const score = [lengthOK, hasNumber, hasUpper, hasSpecial].filter(Boolean).length;
    
    if(score <= 1) {
      return "Faible"
    } else if (score === 2) {
      return "Moyen"
    } else if (score >= 3) {
      return "Fort"
    }
    return "Moyen"
  }
  