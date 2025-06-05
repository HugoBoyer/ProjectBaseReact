import { useState } from "react";
import { SearchBar } from "./productsSearch/SearchBar";
import { ProductTable } from "./productTable/ProductTable";

export function ProductsPage() {
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

    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [search, setSearch] = useState('')
    const [maxPrice, setMaxPrice] = useState(5)
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
            <SearchBar 
                showStockedOnly={showStockedOnly} 
                onStockedOnlyChange={setShowStockedOnly}
                search={search} 
                onSearchChange={setSearch}
                rangeBar={maxPrice}
                onRangeBar={setMaxPrice}/>
            <ProductTable products={visibleProducts}/>
        </>
    )
}