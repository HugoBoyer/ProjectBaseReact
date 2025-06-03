import { useEffect } from "react"
import { useMemo } from "react"
import { useRef } from "react"
import { use, useState } from "react"
import { Checkbox } from "./components/form/Checkbox"
import { useToggle } from "./components/hooks/useToggle"
import { Input } from "./components/form/Input"
import { InputLogin } from "./components/form/InputLogin"
import { InputRange } from "./components/form/InputRange"
import { InputTitle } from "./components/form/InputTitle"
import { Text } from "./components/form/Text"
import { ProductCategoryRow } from "./components/products/ProductCategoryRow"
import { ProductRow } from "./components/products/ProductRow"
import { useIncrement } from "./components/hooks/useIncrement"
import { useDocumentTitle } from "./components/hooks/useDocumentTitle"
import { useFetch } from "./components/hooks/useFetch"


const PRODUCTS = [
  {category: "Food", price: "$2", stocked:true, name:"ships"},
  {category: "Vegetables", price: "$7", stocked:false, name:"Choux"},
  {category: "Vegetables", price: "$3", stocked:false, name:"Carrotte"},
  {category: "Food", price: "$10", stocked:true, name:"algue"},
  {category: "utilite", price: "$1", stocked:true, name:"PQ"},
  {category: "utilite", price: "$1", stocked:false, name:"livre"},
  {category: "Fruit", price: "$1", stocked:true, name:"Pomme"},
  {category: "Fruit", price: "$6", stocked:false, name:"Fraise"},
  {category: "Fruit", price: "$2", stocked:true, name:"Mirtille"},
  {category: "Fruit", price: "$3", stocked:true, name:"Framboise"}
]

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')
  const [maxPrice, setMaxPrice] = useState(5)
  const [displayTitle, setDisplayTitle] = useState(true)
  const [checked, toggleCheck] = useToggle()
  const {count, increment, decrement} = useIncrement({
    base:0,
    max: 10,
    min: 0
  })

  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

  const [name, setName] = useState("")
  useDocumentTitle(name ? `Editer  ${name}` : null)



  const visibleProducts = PRODUCTS.filter(product => {
    if(showStockedOnly && !product.stocked){
      return false
    }

    if(search && !product.name.includes(search)) {
      return false
    }

    const price = parseFloat(product.price.slice(1));
    if (maxPrice > 0 && price > maxPrice) {
      return false;
    }
     return true
  })



  return (
    <>
    {loading && <div>Chargement</div>}
    {errors && <div>{errors}</div>}
    {data && <div>
        {JSON.stringify(data)}
      </div>}




    <InputLogin value={name} onChange={setName}/>
    <p>Title </p>
    <div>
      Compteur {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
    
    <Checkbox 
      checked={checked}
      onChange={toggleCheck}   
    />
    {checked && "Je suis coché"}
    <Text/>
    <Login/>
    <InputChrono />
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Checkbox 
        checked={displayTitle}
        onChange={setDisplayTitle}
        id="titleshow"
        label="Afficher le champs titre"
      />
      {displayTitle && <EditInput/>}
      
      <SearchBar 
        showStockedOnly={showStockedOnly} 
        onStockedOnlyChange={setShowStockedOnly}
        search={search} 
        onSearchChange={setSearch}
        rangeBar={maxPrice}
        onRangeBar={setMaxPrice}
        />

        
      <ProductTable products={visibleProducts}/>
    </>
  )
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange,rangeBar,onRangeBar}) {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <Input 
            value={search} 
            onChange={onSearchChange} 
            placeholder="Rechercher" 
        />
        <Checkbox 
          id="stocked"
          checked={showStockedOnly}
          onChange={onStockedOnlyChange}
          label="N'afficher que les produits en stodck"
        />
        <InputRange
          onChange={onRangeBar}
          value={rangeBar} 
        />
      </div>
    </div>
  )
}

function ProductTable({products}) {
  const rows = []
  let lastCategory = null

  for(let product of products) {
    if(product.category !== lastCategory){
      rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name}/>)

  }
  return (
    <table style={{border: "1px solid black"}}>
      <thead style={{border: "1px solid black"}}>
        <tr>
          <th style={{border: "1px solid black"}}>Nom</th>
          <th style={{border: "1px solid black"}}>Prix</th>
        </tr>
      </thead>
      <tbody style={{border: "1px solid black"}}>
        {rows}
      </tbody>
    </table>
  )
}




function EditInput() {

  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')

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
        <InputTitle 
        onChange={setTitle}
        value={title} 
      />
      <InputTitle 
        onChange={setFirstname} 
        value={firstname}
      />  
      </div>
    <br/>
    </div>
        
  )

}

function InputChrono() {
  const [duration, setDuration] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(duration)
  


  const handleChange = (v) => {
    setDuration(v)

    setSecondsLeft(v)
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(v => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      })
    }, 1000)
    return () => {
      
      clearInterval(timer)
    }
  }, [duration])

  

  return (
    <div>
        <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Input 
        onChange={handleChange}
        value={duration}
      /> 
      <label>Chrono : {secondsLeft}</label>
    </div>
  )
}

function Login() {
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


export default App
