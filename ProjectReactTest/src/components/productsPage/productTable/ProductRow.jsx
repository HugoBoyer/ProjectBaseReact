/**
 * Ligne produit dans un tableau a 2 colonnes (nom/prix)
 * 
 * @param {{name:string, stocked: boolean, price: string}} product 
 */

import { useEffect } from "react"

export function ProductRow({product}) {

    const style = product.stocked ? undefined : {color: "red"}

    useEffect(() => {
        pro.demo
    }, [])

    return (
        <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}