import { useEffect } from "react";
import { Input } from "../form/Input";

export function EditInput({title, setTitle,firstname, setFirstname}) {



  useEffect(() => {
    const originalTitle  = document.title
    return () => {
      document.title = originalTitle
    } 
  }, []);

  useEffect(() => {
    console.log('title')
      document.title = title
  }, [title])

  return (
    <div>
      <div>
        <Input 
        onChange={setTitle}
        value={title}
      />
      <Input 
        onChange={setFirstname}
        value={firstname}
      />  
      </div>
    <br/>
    ---------------------------------------------------------
    </div>
        
  )

}