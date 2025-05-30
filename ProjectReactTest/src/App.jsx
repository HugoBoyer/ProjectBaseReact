import { useState } from "react"
import { Checkbox } from "./components/form/Checkbox"
import { Input } from "./components/form/Input"
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
  return (
    <>
      <SearchBar 
        showStockedOnly={showStockedOnly} 
        onStockedOnlyChange={setShowStockedOnly}
        search={search} 
        onSearchChange={setSearch}/>
      <ProductTable products={PRODUCTS}/>
    </>
  )
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
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


export default App
