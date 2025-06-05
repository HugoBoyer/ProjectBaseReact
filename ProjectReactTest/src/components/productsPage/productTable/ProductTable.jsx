import { ProductCategoryRow } from "./ProductCategoryRow"
import { ProductRow } from "./ProductRow"

export function ProductTable({products}) {
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
  