/**
 * Ligne de tableau avec nom de la catégorie
 * @param {string} name 
 */



export function ProductCategoryRow({name}) {
    return (
        <tr>
            <td colSpan={2} style={{border: "1px solid black"}}><strong>{name}</strong></td>
        </tr>
    )
}