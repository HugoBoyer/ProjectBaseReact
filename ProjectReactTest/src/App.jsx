import { useEffect } from "react"
import { use, useState } from "react"
import { Checkbox } from "./components/form/Checkbox"
import { Input } from "./components/form/Input"
import { InputNumber } from "./components/form/InputNumber"
import { InputRange } from "./components/form/InputRange"
import { InputTitle } from "./components/form/InputTitle"
import { ProductCategoryRow } from "./components/products/ProductCategoryRow"
import { ProductRow } from "./components/products/ProductRow"

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
    <InputChrono />
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
  
console.log('render')

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
      <Input 
        onChange={handleChange}
        value={duration}
      /> 
      <label>Chrono : {secondsLeft}</label>
    </div>
  )
}


export default App
